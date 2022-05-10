import React from 'react'
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function ImageSliderCustom(props) {
    return (
        <div >
            <img-comparison-slider  >
                <img slot="first" src={props.firstImage} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                <img slot="second" src={props.secondImage} style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                {/* <img slot="first" src="https://static.zerochan.net/mery.%28dpqpqp550%29.full.1785984.jpg" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} />
                <img slot="second" src="https://i.pinimg.com/474x/c3/76/47/c37647beb8c214c35bf59d950f1ea6a4.jpg" style={{ maxWidth: '400px', width: '100%', height: 'auto' }} /> */}
            </img-comparison-slider>
        </div>
    )
}

export default ImageSliderCustom