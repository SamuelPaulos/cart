const Cart = require('../model/cart');
const CartLine = require('../model/cartline')

module.exports = class Order {
    constructor() {
        this.totalPrice = 0;
        this.cart = new Cart();
    }
}