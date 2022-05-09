import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

function AlertPopUp() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an Error!</Alert.Heading>
        <p>
          Please Upload an image in tiff format.
        </p>
      </Alert>
    );
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertPopUp