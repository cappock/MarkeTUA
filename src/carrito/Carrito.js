class Carrito{
    constructor(){
        this.id = "carrito";
        var aux = localStorage.getItem(this.id);
        if(aux == null){
            this.items =  {
                "Items": [
                    
                ]
            };
        }else{
            var obj = JSON.parse(aux);
            this.items = obj; 
        }
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }

    getItems(){
        return this.items.Items;
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
        for (var item in obj.Items){
            if(obj.Items[item].id == idItem){
                item !== -1 &&  obj.Items.splice( item, 1 );
                break;
            }   
        }
        this.items = obj;     
        localStorage.setItem(this.id, JSON.stringify(this.items));
    }
}

export default Carrito;