import { ShoppingCart } from './shopping-cart';
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoPercentDiscount,
  Discount,
} from './discount';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { Product } from './product';
import { CardItem } from './interfaces/card-item';

const createShoppingCart = (discount: Discount): ShoppingCartProtocol => {
  return new ShoppingCart(discount);
};

const createProduct = (name: string, price: number): CardItem => {
  return new Product(name, price);
};

const noDiscount = new NoPercentDiscount();

describe('Shopping Cart', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste
  it('have discount property', () => {
    const sut = createShoppingCart(noDiscount);
    expect(sut).toHaveProperty('discount');
  });

  it('should have add items', () => {
    const sut = createShoppingCart(noDiscount);
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Pruduct2', 45));
    expect(sut.items.length).toBe(2);
    expect(sut.items[0]).toBe({
      name: 'Product1',
      price: 50,
    });
    expect(sut.items[1]).toBe({
      name: 'Product2',
      price: 45,
    });
  });

  it('should remove item from shopping-cart', () => {
    const sut = createShoppingCart(noDiscount);
    sut.addItem(createProduct('Product1', 50));
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
  });

  it('should return true in empty shopping-cart', () => {
    const sut = createShoppingCart(noDiscount);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should return the price total', () => {
    const sut = createShoppingCart(noDiscount);
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Product2', 45));
    expect(sut.total()).toBe(95);
  });

  it('should return with 10% discount', () => {
    const sut = createShoppingCart(new TenPercentDiscount());
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Product2', 45));
    expect(sut.totalWithDiscount()).toBeCloseTo(85.5);
  });

  it('should return with 50% discount', () => {
    const sut = createShoppingCart(new FiftyPercentDiscount());
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Product2', 45));
    expect(sut.totalWithDiscount()).toBeCloseTo(47.5);
  });

  it('should clear all items from the shopping cart', () => {
    const sut = createShoppingCart(new TenPercentDiscount());
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Product2', 45));
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.clear()).toBeNull();
  });

  it('should get all products from shopping-cart', () => {
    const sut = createShoppingCart(new TenPercentDiscount());
    sut.addItem(createProduct('Product1', 50));
    sut.addItem(createProduct('Product2', 45));
    expect(sut.items).toEqual([
      { name: 'Product1', price: 50 },
      { name: 'Product2', price: 45 },
    ]);
  });
});
