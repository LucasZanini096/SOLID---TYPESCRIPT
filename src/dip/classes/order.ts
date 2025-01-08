import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  //Classe de ALto Nível, pois ela depende de classes de baixo nível
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //Injecting Dependencies the ShoppingCart and Messaging classes in the Order class
    private readonly cart: ShoppingCartProtocol, //Baixo Nível -> Interface
    private readonly messaging: MessagingProtocol, //Baixo Nível -> Interface
    private readonly persistency: PersistencyProtocol, //Baixo Nível -> Interface
    private readonly customer: CustomerOrder, //Baixo Nível -> Interface
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

    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
