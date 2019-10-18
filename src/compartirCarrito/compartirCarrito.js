
import CarritoCompartido from './carritoCompartido';


function compartirCarrito(stringCarrito) {

    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    var carritoCompartido;
    var link;
    var nro = Math.floor(Math.random() * (10000000));

    const fetchItems = async () => {
        carritoCompartido = new CarritoCompartido(userCredentials.user, stringCarrito);
        const nCar = await carritoCompartido.addUser(nro.toString());
    }

    fetchItems();
    link = "/compartido/" + userCredentials.user + "/" + nro;

    return link;    
}

export default compartirCarrito;
