import React, { useState } from 'react'

import { Alert, Button } from 'react-bootstrap'
import AlertPopUp from './AlertPopUp'
import ModalNav from './ModalNav'

function Test() {

    const [show, setShow] = useState(true);
    const [error, setError] = useState(false);
    return (
        <>
            <Alert variant="success" show={show} >
                <Alert.Heading>Denoised Successfully :)</Alert.Heading>
                <p>
                    Please Download Your Processed Image by Clicking on the Button Given Below.
                    Thank You!
                </p>
                <hr />
                <div className="text-center">
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-2" onClick={() => window.location = downloadImageUrl} type="submit">DOWNLOAD YOUR IMAGE</button>
                    <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={
                        () => { setError(false); setShow(false) }} type="submit">UPLOAD AGAIN</button>
                </div>
            </Alert>
        </>
    )
}

export default Test