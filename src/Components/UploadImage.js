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
                server="/api"
                instantUpload={true}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <div className="text-center">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">DOWNLOAD YOUR IMAGE</button>
            </div>

        </div>
    )
}

export default UploadImage