const Cart = require('../model/cart');
const Product = require('../model/item');
const Cartline = require('../model/cartline');
const Order = require('../src/making_order');
const expect = require('chai').expect;


describe('Cart', () => {
    it('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.cart).to.deep.equal([]);
        expect(cart.totalPrice).to.be.equal(0);
    })


    it('should add a product to the cart, and the cart will display a quantity of 1 of that product, in that line item.', () => {

        const product1 = new Product("Louis Vuitton handbags", 15.99, 10.99);
        const product2 = new Product("Rolex watches", 79.99, 79.99);

        const cart = new Cart();

        cart.addProduct(product1);
        cart.addProduct(product2);


        console.log(cart.cart);

        expect(cart.cart.length).to.deep.equal(2);

    })
})