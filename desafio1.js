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
    //Hice una clase estatica para el id automatico, así no tengo que ingresarlo y es autoincremental como el profe dijo
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


class ProductManager{
    constructor(){
        this.products = [];
    }    
    addProduct(newProduct){  
        //Utilicé el filter ya que con el "includes" no me dejaba ya que tengo objetos y no datos simples
        if ( toString(newProduct.id).length>0 && newProduct.title.length>0 && newProduct.description.length>0 && toString(newProduct.price).length>0 && newProduct.thumbnail.length>0 && newProduct.code.length>0 && toString(newProduct.stock).length>0){
            if (this.products.filter(product=> product.code==newProduct.code).length > 0)
            {
                console.error("Ya existe el producto");
            }
            else 
            {
                this.products.push(newProduct);
            }        
        }else{
            console.error("Debe tener todos los campos completos para agregarlo")
        }
       
    }
    getProductos(){
        return this.products;
    }
    getProductById(id){
        //Me fijo si es diferente a undefined, ya que si es undefined no existe en el array, en caso de que exista lo devuelvo, en caso contrario devuelvo un error
        if (this.products.find(product => product.id == id)!=undefined){
            return this.products.find(product => product.id == id)
        }else{
            return "Product Not found";
        }
    }

}


//Creo los productos (El link de firestore es de mi tp anterior de react)
const producto1=new Producto("Ryzen Threadripper 3990x","Procesador Gaming gama alta",490000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/threadripper3990x.jpg?alt=media&token=e6389599-5247-4468-9e95-725d61d7f34e","aaaa",23);
const producto2=new Producto("Z590 Ultra","Motherboard Gama Alta",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/aorusZ590ULTRA.jpg?alt=media&token=932f4071-ace9-40fb-8f04-c85adf8bf82c","aaab",256);
const producto3=new Producto("Zenith II Alpha","Motherboard Gama Alta",1000000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/ROGthreadripper.jpg?alt=media&token=bfa7fdda-23a5-4c84-92c5-e33dbb3ac93a","aaac",56);
const producto4=new Producto("Rx 5500 xt ASUS","Grafica Gama Media Alta",100000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/rx5500xt.jpg?alt=media&token=f28c7534-425f-497f-b90e-911baea8b560","aaad",32);
const producto5=new Producto("I7 4790","Procesador Gama Media",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/i7_4790.jpg?alt=media&token=9180a992-2129-4ce9-b89e-08c8fdfcc7ac","aaae",22);
const productoPrueba=new Producto("producto prueba","Este es un producto prueba",200,"Sin Imagen","abc123",25);
const productoVacio=new Producto("","","","","","");

//Creo un product manager
productMaganer=new ProductManager()

//Llamo al procedimiento para mostrar el array vacio
console.log(productMaganer.getProductos())

//Agrego los productos al product manager
productMaganer.addProduct(producto1);
productMaganer.addProduct(producto2);
productMaganer.addProduct(producto3);
productMaganer.addProduct(producto4);
productMaganer.addProduct(producto5);
//Esto de abajo dará un mensaje que dice "Debe tener todos los campos completos para agregarlo" ya que es un objeto "vacio"
productMaganer.addProduct(productoVacio);
productMaganer.addProduct(productoPrueba);



//Realizo las pruebas del tp
console.log(productMaganer.getProductos())
//Intento agregar nuevamente el mismo producto para probar que si está repetido el code no lo agrega, se verá el "ya existe el producto" en la consola
productMaganer.addProduct(productoPrueba);

console.log(productMaganer.getProductById(6)); 
console.log(productMaganer.getProductById(654966)); //Devuelve undefined aparte de el mensaje ya que no existe y el return no tiene nada, por lo tanto al querer mostrar algo que no tiene nada, da undefined (tambien podria devolver null al ponerle return null pero lo dejé asi ya que es practicamente lo mismo)
