class Carrito {
    constructor() {
        this.id = "carrito";
        var aux = localStorage.getItem(this.id);
        if (aux == null) {
            this.items = {
                "Items": [

                ]
            };
        } else {
            var obj = JSON.parse(aux);
            this.items = obj;
        }
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }

    constructor1(id) {
        this.id = id;
        var aux = localStorage.getItem(this.id);
        if (aux == null) {
            this.items = {
                "Items": [

                ]
            };
        } else {
            var obj = JSON.parse(aux);
            this.items = obj;
        }
        localStorage.setItem(this.id, JSON.stringify(this.items));
        return this;
    }

    constructor2(idCarrito,items){
        var obj =(items);
        //console.log(obj);
        this.id = idCarrito;
        var aux = {
            "Items": obj }
        localStorage.setItem(this.id, JSON.stringify(aux));
        return this;
    }

    getItems() {
        var aux = localStorage.getItem(this.id);
        var obj = JSON.parse(aux);
        this.items = obj;
        return this.items.Items;
    }

    addItem(idItem) {
        var aux = localStorage.getItem(this.id);
        var obj = JSON.parse(aux);
        for (var item in obj.Items) {
            if (obj.Items[item].id === idItem.id) {
                return 'it\'s already in the car';
            }
        }
        obj.Items.push(idItem);
        this.items = obj;
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }

    deleteItem(idItem) {
        var aux = localStorage.getItem(this.id);
        var obj = JSON.parse(aux);
        for (var item in obj.Items) {
            if (obj.Items[item].id === idItem) {
                item !== -1 && obj.Items.splice(item, 1);
                break;
            }
        }
        this.items = obj;
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }
}

export default Carrito;