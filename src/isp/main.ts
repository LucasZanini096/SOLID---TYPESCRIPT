/*
Interface Segregation Principle (ISP - Princípio da Segregação de Interfaces) -
Uma classe não deve ser forçada a implementar interfaces, types, classes abstratas e métodos que não irão utilizar.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const fifyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fifyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Lucas',
  'Zanini',
  '47875112893',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);
shoppingCart.addItem(new Product('Shirt', 50));
shoppingCart.addItem(new Product('Shoes', 100));
shoppingCart.addItem(new Product('Pants', 150));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
