import React, { useEffect } from 'react'

import ModalNav from './ModalNav'

function Navbar() {
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        // Collapsible Navbar after Clicking Link
        $('.js-scroll-trigger').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        })
    }
    )


    return (
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top mb-3" style={{ background: 'black' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Medical Image Denoise</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active js-scroll-trigger" aria-current="page" href="#"  >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#algo"  >Algorithm</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#working">Working</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#tools"  >Tools Used</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#aboutus" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#faq"  >FAQs</a>
                        </li>

                        <button className="btn btn-outline-light my-2 my-sm-0 mx-3" type="submit" onClick={() => setModalShow(true)}>Upload</button>
                    </ul>


                    <ModalNav
                        show={modalShow}
                        onHide={() => setModalShow(false)} />



                </div>
            </div>
        </nav>
    )
}

export default Navbar