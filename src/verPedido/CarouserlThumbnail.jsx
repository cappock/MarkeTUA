import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const CarouselThumbnail = (props) => {
    return (
        <Carousel>
            {props.images.length > 0 ? (
                props.images.map((image, index) => (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image.url}
                        alt="First slide"
                        width="50"
                        height="100" 
                    />                 
                </Carousel.Item>
                ))
            ) : (
                   <div></div>
                )}
        </Carousel>
    );
}

export default CarouselThumbnail;