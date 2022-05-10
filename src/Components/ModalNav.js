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
                    <ImageSliderCustom firstImage="https://static.zerochan.net/mery.%28dpqpqp550%29.full.1785984.jpg" secondImage="https://i.pinimg.com/474x/c3/76/47/c37647beb8c214c35bf59d950f1ea6a4.jpg" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalNav