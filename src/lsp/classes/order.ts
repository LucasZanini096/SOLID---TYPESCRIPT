import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //Injecting Dependencies the ShoppingCart and Messaging classes in the Order class
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Your total is $${this.cart.total()}`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
