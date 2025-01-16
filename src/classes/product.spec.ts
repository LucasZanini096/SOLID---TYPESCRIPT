import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste
  it('should have properties name and price', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
