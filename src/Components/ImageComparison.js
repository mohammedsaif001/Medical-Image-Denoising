import React from 'react'
import ImageSlider from "react-image-comparison-slider";
import './ImageComparison.css'
import ImageSliderCustom from './ImageSliderCustom';

function ImageComparison() {
    return (
        <>
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
            <div className="container1" style={{ padding: '29px' }}>
                <h2 className='mt-5 mb-5'>Bootstrap Responsive Website</h2>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5" >
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
                            <ImageSliderCustom />

                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                        {/* <h4 className='mt-5 mb-4'>Bootstrap Responsive Website</h4> */}
                        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque est labore nemo magnam. Libero nisi a quos consectetur est, ipsum nihil nobis laborum velit quod harum odit magni beatae ullam similique iure, at, eveniet ex voluptatem quam nostrum necessitatibus deleniti? Illo blanditiis dignissimos nostrum aut commodi, fugit similique hic ipsum inventore explicabo natus veniam ullam itaque iusto minus eum! Deserunt quos iure quaerat cupiditate eos reprehenderit repudiandae, repellat doloremque rerum aliquam omnis laudantium iste porro atque similique incidunt!</p>
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
        </>
        // <h1>Comparison</h1>
    )
}

export default ImageComparison