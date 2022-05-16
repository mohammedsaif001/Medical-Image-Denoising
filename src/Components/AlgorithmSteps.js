import React, { useState, useEffect } from 'react'
import Steps from './Steps'
import StepsContent from './StepsContent'

function AlgorithmSteps() {
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 576);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 576);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <div id='algo' className='mt-4 mb-5 navBarMargin'>
            <div className="container">

                <h1 className='page-title'>Algorithm Details</h1>
            </div>
            <div className='stepsContainer mt-4' >
                <div className="container pb-4">
                    <p className='mt-4'>Presenting a CNN-based algorithm with the help of encoders and decoders using ReLu, Sigmoid as activation function and Adam as an optimizer to find the optimum fit and to train the efficient model using Extensive Empirical Study using data sets from Brainweb. Estimating the original image by suppressing noise from a noise contaminated version of the image by applying our efficient algorithm to denoise the image with the highest SSIM and PSNR values with low processing time.</p></div>

                {isDesktop ? <div className="row ">
                    {StepsContent.length > 0 && StepsContent.map((ele, index) => (
                        <Steps number={ele.slNo} heading={ele.heading} description={ele.description} key={ele.slNo} value={index} />
                    ))}
                </div>
                    :
                    <div className="row">
                        {StepsContent.length > 0 && StepsContent.map((ele, index) => (
                            <Steps number={ele.slNo} heading={ele.heading} description={ele.description} key={ele.slNo} value={index} />
                        ))}


                    </div>
                }



            </div>
        </div >
    )
}

export default AlgorithmSteps