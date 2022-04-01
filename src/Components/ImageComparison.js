import React from 'react'
import ImageSlider from "react-image-comparison-slider";

function ImageComparison() {
    return (
        <>
            <div style={{ width: '75%', height: '90vh', marginTop: '5vh', marginBottom: '5vh', marginLeft: 'auto', marginRight: 'auto' }}>
                <ImageSlider
                    image1="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    image2="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    onSlide={() => {
                        console.log("sliding");
                    }}
                />

            </div>
            <div style={{ width: '37%', height: '70vh', marginTop: '5vh', marginBottom: '5vh', marginLeft: 'auto', marginRight: 'auto' }}>
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

            </div>
        </>
        // <h1>Comparison</h1>
    )
}

export default ImageComparison