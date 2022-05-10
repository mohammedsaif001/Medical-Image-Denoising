import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

function AlertPopUp(props) {

  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);



  if (show) {
    return (

      props.variant === 'success' ?
        // Alert Dialog Box when Success & Option for downloading Image
        <Alert variant="success" show={show} >
          <Alert.Heading>Denoised Successfully :)</Alert.Heading>
          <p>
            Please Download Your Processed Image by Clicking on the Button Given Below.
            Thank You!
          </p>
          <hr />
          <div className="text-center">
            <button className="btn btn-outline-success my-2 my-sm-0 mx-2" onClick={() => window.location = props.Imgurl} type="submit">DOWNLOAD YOUR IMAGE</button>
            <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={
              () => { setError(false); setShow(false) }} type="submit">UPLOAD AGAIN</button>
          </div>
        </Alert>
        :

        // Alert Dialog Box when Error Occurs
        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an Error :(</Alert.Heading>
          <p>
            Please Upload an Image in TIFF / TIF format.
          </p>
          <div className="text-center">
            <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" onClick={
              () => { setError(false); setShow(false) }} type="submit">UPLOAD AGAIN</button>
          </div>
        </Alert>

    );
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertPopUp