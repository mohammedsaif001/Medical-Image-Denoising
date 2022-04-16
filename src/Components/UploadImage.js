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

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function UploadImage() {
    const [files, setFiles] = useState([]);
    return (
        <div>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
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
                        request.open('POST', 'http://35.154.93.219:5000/');


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

                                // load(obj.imageUrl);
                                console.log(obj)

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
            <div className="text-center">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">DOWNLOAD YOUR IMAGE</button>
            </div>

        </div>
    )
}

export default UploadImage