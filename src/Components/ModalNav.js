import React from 'react'

import { Button, Modal } from 'react-bootstrap'
import ImageSliderCustom from './ImageSliderCustom'
import UploadImage from './UploadImage'
function ModalNav(props) {
    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Upload Your File
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Please Upload Tif File</h4> */}
                    <UploadImage />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalNav