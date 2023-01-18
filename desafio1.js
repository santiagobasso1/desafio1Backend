class Producto{
    
    constructor(title,description,price,thumbnail,code,stock){
        this.id = Producto.idAutomatico();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    static idAutomatico() {
        if (!this.idAnterior) {
          this.idAnterior = 1
        }
        else {
          this.idAnterior++
        }
        return this.idAnterior
      }

}
const producto1=new Producto("Ryzen Threadripper 3990x","Procesador Gaming gama alta",490000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/threadripper3990x.jpg?alt=media&token=e6389599-5247-4468-9e95-725d61d7f34e","aaaa",23);
const producto2=new Producto("Z590 Ultra","Motherboard Gama Alta",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/aorusZ590ULTRA.jpg?alt=media&token=932f4071-ace9-40fb-8f04-c85adf8bf82c","aaab",256);
const producto3=new Producto("Zenith II Alpha","Motherboard Gama Alta",1000000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/ROGthreadripper.jpg?alt=media&token=bfa7fdda-23a5-4c84-92c5-e33dbb3ac93a","aaac",56);
const producto4=new Producto("Rx 5500 xt ASUS","Grafica Gama Media Alta",100000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/rx5500xt.jpg?alt=media&token=f28c7534-425f-497f-b90e-911baea8b560","aaad",32);
const producto5=new Producto("I7 4790","Procesador Gama Media",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/i7_4790.jpg?alt=media&token=9180a992-2129-4ce9-b89e-08c8fdfcc7ac","aaae",22);

class ProductManager{
    constructor(){
        this.products = [];
    }    
    addProduct(newProduct){  
        if (this.products.filter(product=> product.code==newProduct.code).length > 0)
        {
            console.error("Ya existe el producto");
        }
        else 
        {
            this.products.push(newProduct);
        }        
    }
    getProductos(){
        return this.products;
    }
    getProductById(id){
        return this.products.find(product => product.id == id);
    }

}
productMaganer=new ProductManager()

productMaganer.addProduct(producto1);
productMaganer.addProduct(producto2);
productMaganer.addProduct(producto3);
productMaganer.addProduct(producto4);
productMaganer.addProduct(producto5);

console.log(productMaganer.getProductos())
console.log(productMaganer.getProductById(4));
