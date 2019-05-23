const Cartline = require('./cartline');

module.exports = class Cart {
    constructor() {
        this.totalPrice = 0;
        this.cart = [];
        this.map = new Map();
    }

    addProduct(product) {
       
        if (!this.map.get(product)) {
            const lineitem = new Cartline();
            lineitem.product = product;
            lineitem.quantity = 1;
            this.cart.push(lineitem);
            this.map.set(product, 1);
        } else {
            this.map.get(product) += 1;
        } 
    } 
};