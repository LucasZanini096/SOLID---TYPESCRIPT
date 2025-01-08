/*
DIP -> Dependency Inversion Principle (Princípio da Inversão de Dependência)
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

Dependa de abstrações, não de implementações, ou seja, não dependa de classes concretas.

Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações. Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes).
Classes de alto nível são classes que gerenciam as classes de baixo nível.

Quanto maior o alto nível, maior o nível de abstração
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
