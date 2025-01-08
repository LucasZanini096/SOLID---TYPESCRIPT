import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste
  it('should return undefined', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // Espionando o console.log -> jest.spyOn(objeto, 'método')
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Order saved successfully"', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // Espionando o console.log -> jest.spyOn(objeto, 'método')
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Order saved successfully');
  });
});
