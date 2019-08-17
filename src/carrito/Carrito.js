class Carrito{
    constructor(id,items){
        this.items =  {
            "Items": []
        };
        this.id = id;
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }

    addItem(idItem){
        var aux = localStorage.getItem(this.id);
        var obj = JSON.parse(aux);
        obj.Items.push(idItem);
        this.items = obj;     
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }    

    deleteItem(idItem){
        var aux = localStorage.getItem(this.id);
        var obj = JSON.parse(aux);

        var i = obj.Items.indexOf( idItem );
        i !== -1 &&  obj.Items.splice( i, 1 );

        this.items = obj;     
        console.log(this.items);
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }
}

export default Carrito;