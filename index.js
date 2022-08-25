//1

class Product {

    constructor(name, price){

        this.name = name
        this.price = price
    }

    toText (){
        console.log(`${this.name} ${this.price}€ in total. ${this.containedVAT()} € VAT incl.(16%)`)
    }

    containedVAT() {
        return (this.price - this.price/1.16).toFixed(2)
    }
}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

tracksuit.toText()
console.log(tracksuit.containedVAT())

//2

class Cart {
    constructor(){
        this.products = []
    }

    addProduct(shoppedProduct) {
        if(shoppedProduct instanceof Product){
            this.products.push(shoppedProduct)
            return `${this.products.length} product is in the cart.`
        } else {return "The product is not available in the shop."
        }
    }

    getProductInfoCart() {

        this.products.forEach(product => {
            product.toText ()
        })
    }

    getTotalItemsPrice() {
        return this.products.reduce((acc, item ) => acc += item.price, 0).toFixed(2)
    }
}


const cart = new Cart()

console.log(cart.addProduct(tracksuit))
console.log(cart.addProduct(shoes))
console.log(cart.addProduct("potato"))
console.log(cart.addProduct(socks))
console.log(cart)


cart.getProductInfoCart()
console.log(cart.getTotalItemsPrice())




