/*
Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov
Definição: Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
Ou seja, todos os métodos que usam parâmetros de um tipo base devem continuar a funcionar corretamente quando recebem objetos de um tipo derivado das classes base.
Simples: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
