import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const CarouselPage = (props) => {
    return (
        <Carousel>
            {props.images.length > 0 ? (
                props.images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{textShadow: '2px 2px #000'}}>{props.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            ) : (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.thumbnail}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{textShadow: '2px 2px #000'}}>{props.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

        </Carousel>
    );
}

export default CarouselPage;