import { CardItem } from './card-item';

export interface ShoppingCartProtocol {
  get items(): Readonly<CardItem[]>; //Readonly is a typescript feature that makes the array immutable

  addItem(item: CardItem): void;

  removeItem(index: number): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
