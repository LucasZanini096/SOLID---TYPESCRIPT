type CardItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CardItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1); //Splice remove the item from the array
  }

  get items(): Readonly<CardItem[]> {
    //Readonly is a typescript feature that makes the array immutable
    return this._items;
  }

  get OrderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    ); //toFixed(2) is used to return a string with 2 decimal places
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Your total is $${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(message: string): void {
    console.log('Message sent:', message);
  }

  saveOrder(): void {
    console.log('Order saved successfully');
  }

  clear(): void {
    console.log('Shopping cart cleared');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Shirt', price: 50 });
shoppingCart.addItem({ name: 'Shoes', price: 100 });
shoppingCart.addItem({ name: 'Pants', price: 150 });
shoppingCart.removeItem(1);
console.log(shoppingCart);
