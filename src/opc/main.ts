/*
Open/Closed Principle (Princípio do Aberto/Fechado) - OCP
Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const fifyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fifyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Shirt', 50));
shoppingCart.addItem(new Product('Shoes', 100));
shoppingCart.addItem(new Product('Pants', 150));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
