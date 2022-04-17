import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function ImageSliderCustom() {
    return (
        <div >
            <img-comparison-slider style={{ maxWidth: '255px', height: '255px', width: '100%' }} >
                <img slot="first" src="images/Output.jpg" />
                <img slot="second" src="images/test.jpg" />
            </img-comparison-slider>
        </div>
    )
}

export default ImageSliderCustom