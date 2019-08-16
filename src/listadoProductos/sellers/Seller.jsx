import React, {  useState, useEffect } from 'react';

const Seller = props => {

    const [seller, setSeller] = useState("");

    useEffect(()=>{

        fetch(`https://api.mercadolibre.com/users/${props.id}`, { mode: "cors" })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setSeller(myJson.nickname);
            });
    }, [props.id]);

    return(
        <div className="text">Seller: {seller} </div>
    )
}

export default Seller;