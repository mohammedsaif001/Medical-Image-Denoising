import React, { useState } from 'react'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import AlertPopUp from './AlertPopUp';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function UploadImage() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(false);
    const [show, setShow] = useState(true);
    const [downloadImageStatus, setDownloadImageStatus] = useState(false)
    const [downloadImageUrl, setDownloadImageUrl] = useState(null)

    return (
        <div>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                allowDrop={true}
                allowBrowse={true}
                maxFiles={1}
                server={{


                    revert: (uniqueFileId, load, error) => {
                        // Should remove the earlier created temp file here
                        // ...

                        console.log('fileid: ' + uniqueFileId)
                        // Can call the error method if something is wrong, should exit after
                        error('oh my goodness');

                        // Should call the load method when done, no parameters required
                        load();
                    },


                    process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {

                        const formData = new FormData();

                        formData.append('image', file);

                        const request = new XMLHttpRequest();
                        request.open('POST', 'https://65.1.177.200:5000/');


                        // Should call the progress method to update the progress to 100% before calling load
                        // Setting computable to false switches the loading indicator to infinite mode
                        request.upload.onprogress = (e) => {
                            progress(e.lengthComputable, e.loaded, e.total);
                        };

                        // Should call the load method when done and pass the returned server file id
                        // this server file id is then used later on when reverting or restoring a file
                        // so your server knows which file to return without exposing that info to the client
                        request.onload = function () {

                            if (request.status >= 200 && request.status < 300) {
                                // the load method accepts either a string (id) or an object
                                console.log(request.status)
                                const obj = JSON.parse(request.responseText);
                                console.log(obj)


                                switch (obj.response.code) {
                                    case 200:
                                        load(obj.processedImage);
                                        setDownloadImageStatus(true)
                                        setDownloadImageUrl(obj.processedImage)
                                        break

                                    case 400:

                                        switch (obj.response.status) {
                                            case "image-format-invalid":

                                                //alert user
                                                setError(true)
                                                break
                                        }

                                        break

                                }



                                //console.log(obj.imageUrl)
                                //   setFiles([...files , file]);
                            } else {
                                // Can call the error method if something is wrong, should exit after
                                error('oh no');
                            }
                        };

                        request.send(formData);

                        // Should expose an abort method so the request can be cancelled
                        return {
                            abort: () => {
                                // This function is entered if the user has tapped the cancel button
                                request.abort();

                                // Let FilePond know the request has been cancelled
                                abort();
                            },
                        };


                    }



                }}
                instantUpload={true}
                name="files"
                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
            />
            {/* <AlertPopUp variant="success" />
            <AlertPopUp variant="danger" /> */}

            {

                downloadImageStatus ?
                    // Alert Dialog Box when Success & Option for downloading Image
                    <AlertPopUp variant="success" Imgurl={downloadImageUrl} />
                    // <Alert variant="success" show={show} Imgurl={downloadImageUrl} >
                    //     <Alert.Heading>Denoised Successfully :)</Alert.Heading>
                    //     <p>
                    //         Please Download Your Processed Image by Clicking on the Button Given Below.
                    //         Thank You!
                    //     </p>
                    //     <hr />
                    //     <div className="text-center">
                    //         <button className="btn btn-outline-success my-2 my-sm-0 mx-2" onClick={() => window.location = downloadImageUrl} type="submit">DOWNLOAD YOUR IMAGE</button>
                    //         <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={
                    //             () => { setError(false); setShow(false) }} type="submit">UPLOAD AGAIN</button>
                    //     </div>
                    // </Alert>
                    :

                    <div></div>

            }

            {
                error ?
                    // Alert Dialog Box when Error Occurs
                    <AlertPopUp variant="danger" />
                    // <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
                    //     <Alert.Heading>Oh snap! You got an Error :(</Alert.Heading>
                    //     <p>
                    //         Please Upload an Image in TIFF / TIF format.
                    //     </p>
                    //     <div className="text-center">
                    //         <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={
                    //             () => { setError(false); setShow(false) }} type="submit">UPLOAD AGAIN</button>
                    //     </div>
                    // </Alert>
                    :
                    <div></div>
            }

        </div>
    )
}

export default UploadImage