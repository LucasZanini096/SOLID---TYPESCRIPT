import {
  Discount,
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste
  it('should have no discount', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut(NoPercentDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
