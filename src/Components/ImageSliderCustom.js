import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function ImageSliderCustom() {
    return (
        <div >
            <img-comparison-slider style={{ maxWidth: '400px', height: '400px', width: '400px' }} >
                <img slot="first" src="images/output.png" />
                <img slot="second" src="images/input.png" />
            </img-comparison-slider>
        </div>
    )
}

export default ImageSliderCustom