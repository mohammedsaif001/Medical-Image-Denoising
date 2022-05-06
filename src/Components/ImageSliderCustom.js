import React from 'react'
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function ImageSliderCustom() {
    return (
        <div >
            <img-comparison-slider  >
                <img slot="first" src="images/output.png" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                <img slot="second" src="images/input.png" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
            </img-comparison-slider>
        </div>
    )
}

export default ImageSliderCustom