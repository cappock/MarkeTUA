import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import '../verPedido/Pedido.scss';

const CarouselThumbnail = (props) => {
    return (
        <Carousel>
            {props.images.length > 0 ? (
                props.images.map((image, index) => (
                    <Carousel.Item>
                    <img
                        className="image-carrousel"
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