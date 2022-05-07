import React from 'react'
import ImageSlider from "react-image-comparison-slider";
import './ImageComparison.css'
import ImageSliderCustom from './ImageSliderCustom';
import ModalNav from './ModalNav'

function ImageComparison() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div >
            {/* <div style={{ width: '75%', height: '90vh', marginTop: '5vh', marginBottom: '5vh', marginLeft: 'auto', marginRight: 'auto' }} >
                <ImageSlider
                    image1="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    image2="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    onSlide={() => {
                        console.log("sliding");
                    }}
                />

            </div> */}
            {/* <h2 >Bootstrap image and text side by side.</h2> */}
            <div className='container navBarMargin' id='working'>

                <h1 className='mt-5 mb-5 page-title'>Working of Algorithm</h1>
            </div>
            <div className="team pt-5">

                <div className="container3 container mt-3">
                    <div className="row" >
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" >
                            <div className='img-fluid imageSli' >
                                {/* <ImageSlider
                                image1={process.env.PUBLIC_URL + "images/Output.jpg"}
                                image2={process.env.PUBLIC_URL + "images/test.jpg"}
                                onSlide={() => {
                                    console.log("sliding");
                                }}
                                leftLabelText="Input"
                                rightLabelText='Output'
                                handleColor='black'
                                sliderColor='white'
                            /> */}
                                <h4 style={{ fontFamily: 'Roboto,sans-serif' }} >SLIDE TO COMPARE RESULT</h4>
                                <ImageSliderCustom />

                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12" >
                            <h4 className='mt-5 mb-4 card-title'>Details About the Working</h4>
                            <p className='mt-3 text-muted' style={{ padding: '0 5%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est labore nemo magnam. Libero nisi a quos consectetur est, ipsum nihil nobis laborum velit quod harum odit magni beatae ullam similique iure, at, eveniet ex voluptatem quam nostrum necessitatibus deleniti? Illo blanditiis dignissimos nostrum aut commodi, fugit similique hic ipsum inventore explicabo natus veniam ullam itaque iusto minus eum! Deserunt quos iure quaerat cupiditate eos reprehenderit repudiandae, repellat doloremque rerum aliquam omnis laudantium iste porro atque similique incidunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolorum nihil numquam officia magnam nulla quam reiciendis similique cupiditate iste aliquam illo officiis modi assumenda odio excepturi voluptatum amet voluptatem, magni maxime labore ducimus esse! Delectus unde, fuga nihil corporis mollitia molestiae aliquam veritatis impedit!</p>

                            <button className="btn btn-dark my-2 my-sm-0 mx-3" type="submit" onClick={() => setModalShow(true)}>CLICK HERE TO UPLOAD YOUR IMAGE</button>

                            <ModalNav
                                show={modalShow}
                                onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ width: '100%', height: '70vh', marginTop: '5vh', marginBottom: '5vh', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px' }}>
                <ImageSlider
                    image1={process.env.PUBLIC_URL + "images/Output.jpg"}
                    image2={process.env.PUBLIC_URL + "images/test.jpg"}
                    onSlide={() => {
                        console.log("sliding");
                    }}
                    leftLabelText="Input"
                    rightLabelText='Output'
                    handleColor='black'
                    sliderColor='white'
                />

            </div> */}
        </div>
        // <h1>Comparison</h1>
    )
}

export default ImageComparison