import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import img1 from '../../photos/img1.jpg'
import img2 from '../../photos/img2.jpg'
import img3 from '../../photos/img3.jpg'

function CarouselSection() {
    return (
        <div>
            <Carousel className="Caroussel">
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="First slide"/>
                    <Carousel.Caption className="Text">
                        <h3>Welcome To Our Clothes Store</h3>
                        <p>We provide have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Third slide"/>
                    <Carousel.Caption className="Text">
                        <h3>Here we Have clothes for Men</h3>
                        <p>All Men wear are available in our store and you can shippable them everywhere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Third slide"/>
                    <Carousel.Caption className="Text">
                        <h3>As well for Women</h3>
                        <p>Find your unique style</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default CarouselSection