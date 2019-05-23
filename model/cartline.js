const Item = require('./item');

module.exports = class CartLine {
    constructor() {
        this.product = null;
        this.quantity = 0;
        this.linemap = new Map();
    }

}