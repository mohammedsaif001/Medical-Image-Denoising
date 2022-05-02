import React, { useRef, useEffect } from 'react'
import $ from 'jquery'

function ToolsUsed() {

    const logo = useRef(null)
    const logoSlide = useRef(null)
    console.log(logoSlide.current)
    console.log(logo.current)

    // useEffect(() => {
    //     logoSlide.slick({
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 1500,
    //         arrows: false,
    //         dots: false,
    //         pauseOnHover: false,
    //         responsive: [{
    //             breakpoint: 768,
    //             setting: {
    //                 slidesToShow: 4
    //             }
    //         }, {
    //             breakpoint: 520,
    //             setting: {
    //                 slidesToShow: 3
    //             }
    //         }]
    //     }
    //     );
    // })

    useEffect(() => {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
    })




    return (
        <div id='logo' ref={logo}>
            <div className="container c1">
                <h2 className="text-center font-weight-bold">Our Partners</h2>
                <section className="customer-logos slider" id='logoSlide' ref={logoSlide}>
                    <div className="slide"><img src="images/adidas.png" alt="logo" /></div>
                    <div className="slide"><img src="images/facebook.png" alt="logo" /></div>
                    <div className="slide"><img src="images/google.png" alt="logo" /></div>
                    <div className="slide"><img src="images/instagram.png" alt="logo" /></div>
                    <div className="slide"><img src="images/nike.png" alt="logo" /></div>
                    <div className="slide"><img src="images/twitter.png" alt="logo" /></div>
                    <div className="slide"><img src="images/uber.png" alt="logo" /></div>
                    <div className="slide"><img src="images/youtube.png" alt="logo" /></div>
                </section>
            </div>

            <p className="copy text-center font-weight-bold">All Rights Reserved &copy; Make Dev</p>
        </div>
    )
}

export default ToolsUsed