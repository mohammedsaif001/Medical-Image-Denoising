import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselHome() {
    return (
        <div >
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption className='thirdSlide'>
                        <h5>Medical Image Denoising</h5>
                        <p>We denoise medical MRI images since it is a mandatory and essential preprocessing technique for further medical image processing stages.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='thirdSlide'>
                        <h5 >What is Image Denoising? </h5>
                        <p > One of the fundamental challenges in the field of image processing and computer vision is image denoising, where the underlying goal is to estimate the original image by suppressing noise from a noise-contaminated version of the image.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5723883/pexels-photo-5723883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='thirdSlide'>
                        <h5>Why CNN for Image Denoising? </h5>
                        <p>The CNN based image denoising models have shown improvement in denoising performance as compared to non‐CNN methods.The use of CNN is not limited to general image denoising alone, CNN produced excellent results for blind denoising , real noisy images and many others.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default CarouselHome