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

    addUser() {
        const db = firebaseConfig.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

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