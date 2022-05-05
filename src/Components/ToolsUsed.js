import React from 'react'
import Slider from "react-slick";

function ToolsUsed() {
    var settings = {
        // dots: true,
        autoplaySpeed: 3050,
        autoplay: true,
        // slidesToShow: 4,
        // slidesToScroll: 3,
        initialSlide: 0,
        centerPadding: '200px',
        accessibility: true,

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
                    slidesToShow: 3,
                    slidesToScroll: 1, lazyLoad: 'ondemand',
                }
            }
        ]
    };
    return (
        // <Slider {...settings}>
        //     <div className="container c1">
        //         <h2 className="text-center font-weight-bold">Our Partners</h2>
        //         <section className="customer-logos slider">
        //             <div className="slide"><img src="images/adidas.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/facebook.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/google.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/instagram.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/nike.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/twitter.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/uber.png" alt="logo" /></div>
        //             <div className="slide"><img src="images/youtube.png" alt="logo" /></div>
        //         </section>
        //     </div>
        // </Slider>
        <div className='container'>
            <h1 className="page-title">Tools/Libraries/Frameworks</h1>
            <Slider {...settings}>
                {/* <img src="images/adidas.png" alt="logo" />

                <img src="images/facebook.png" alt="logo" />

                <img src="images/google.png" alt="logo" />

                <img src="images/twitter.png" alt="logo" />

                <img src="images/instagram.png" alt="logo" />

                <img src="images/nike.png" alt="logo" />

                <img src="images/uber.png" alt="logo" />
                <img src="images/youtube.png" alt="logo" /> */}


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


                {/* <div>
                <img src="images/adidas.png" alt="logo" />
            </div>
            <div>
                <img src="images/facebook.png" alt="logo" />
            </div>
            <div>
                <img src="images/google.png" alt="logo" />
            </div>
            <div>
                <img src="images/twitter.png" alt="logo" />
            </div>
            <div>
                <img src="images/instagram.png" alt="logo" />
            </div>
            <div>
                <img src="images/nike.png" alt="logo" />
            </div>
            <div>
                <img src="images/uber.png" alt="logo" />
            </div>
            <div>
                <img src="images/youtube.png" alt="logo" />
            </div> */}
                {/* 
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" />
            <img src="images/youtube.png" alt="logo" /> */}
            </Slider>
        </div>
    );
}


export default ToolsUsed