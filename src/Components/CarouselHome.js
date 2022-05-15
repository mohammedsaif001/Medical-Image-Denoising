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
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div style={{ background: 'black', padding: '20px 10px' }}>

                            <h5 style={{ color: 'red' }}>Second slide label</h5>
                            <p style={{ color: 'white' }}> Lorem ipsum dolor,!
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5723883/pexels-photo-5723883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default CarouselHome