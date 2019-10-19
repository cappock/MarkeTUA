import React from 'react';
import firebaseConfig from '../logeoFirebase/firebaseConfig';


class CarritoCompartido extends React.Component {
    constructor(user,carrito) {
        super();
        this.state = {
            user: user,
            carrito: carrito
        };
        this.data = [];
    }

    async addUser(nro) {

        const db = firebaseConfig.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        var data;
        const userRef = await db.collection("carritosCompartidosReact").doc(this.state.user)
        .get().then(doc => {
            data = doc.data();  
        });
        if (typeof data != 'undefined'){
            var carUpdate = data.carrito;
            carUpdate = JSON.parse(carUpdate);
            carUpdate[nro] = (this.state.carrito);
            this.state.carrito = JSON.stringify(carUpdate);
        }else{
            var aux = this.state.carrito;
            this.state.carrito = {"0" : "inicio"};
            this.state.carrito[nro] = aux;
            this.state.carrito = JSON.stringify(this.state.carrito);
        }

        db.collection('carritosCompartidosReact').doc(this.state.user).delete();
        db.collection("carritosCompartidosReact")
        .doc(this.state.user)
        .set(this.state)
    };

    async getCar(user) {
        const db = firebaseConfig.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        var data = [];
        const userRef = await db.collection("carritosCompartidosReact").doc(user)
        .get().then(doc => {
            data = doc.data();  
        });
        return data;       
    };
}


export default CarritoCompartido;
