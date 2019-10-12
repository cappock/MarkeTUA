import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const CarouselPage = (props) => {
    return (
        <Carousel>
            {props.images.length > 0 ? (
                props.images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="image-carrousel"
                            src={image.url}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            ) : (
                    <Carousel.Item>
                        <img
                            className="image-carrousel"
                            src={props.thumbnail}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )}

        </Carousel>
    );
}

export default CarouselPage;