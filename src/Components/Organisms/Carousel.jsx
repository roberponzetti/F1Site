import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imgCarousel1 from '../../img/carousel1.jpg';
import imgCarousel2 from '../../img/carousel2.jpg';
import imgCarousel3 from '../../img/carousel3.jpg';

const Carrusel = () => (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCarousel1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCarousel2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCarousel3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default Carrusel