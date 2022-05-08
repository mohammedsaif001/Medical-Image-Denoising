import React from 'react'
import Slider from "react-slick";

function ToolsUsed() {
    var settings = {
        // dots: true,
        autoplaySpeed: 750,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,
        centerPadding: '200px',
        accessibility: true,
        rows: '1',

        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 5,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    dots: true
                }
            },
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    lazyLoad: 'ondemand',
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    lazyLoad: 'ondemand',
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2, lazyLoad: 'ondemand',
                }
            }
        ]
    };
    return (
        <div className='container mb-5 navBarMargin' id='tools' >
            <h1 className="page-title">Tools / Libraries / Frameworks</h1>
            <Slider {...settings}>

                <img src="images/python.png" alt="logo" />
                <img src="images/tensorflow.png" alt="logo" />
                <img src="images/matplotlib.jpg" alt="logo" />
                <img src="images/scikit.jpg" alt="logo" />
                <img src="images/keras.jpg" alt="logo" />
                <img src="images/kaggle.png" alt="logo" />
                <img src="images/reactjs.png" alt="logo" />
                <img src="images/bootstrap.png" alt="logo" />
                <img src="images/javascript2.jpg" alt="logo" />
                <img src="images/jquery.png" alt="logo" />
                <img src="images/nodejs.png" alt="logo" />
                <img src="images/aws.png" alt="logo" />
                <img src="images/flask.png" alt="logo" />

            </Slider>
        </div>
    );
}


export default ToolsUsed