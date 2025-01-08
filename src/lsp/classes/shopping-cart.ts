import { Discount } from './discount';
import { CardItem } from './interfaces/card-item';

export class ShoppingCart {
  private readonly _items: CardItem[] = [];

  constructor(private readonly discount: Discount) {}

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

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    ); //toFixed(2) is used to return a string with 2 decimal places
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart cleared');
    this._items.length = 0;
  }
}
