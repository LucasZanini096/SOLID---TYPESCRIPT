import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste
  it('should return undefined', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // Espionando o console.log -> jest.spyOn(objeto, 'método')
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with Message sent:" and msg', () => {
    // System Under Test -> sut
    // É uma convenção de nomenclatura para indicar que a variável é o objeto que estamos testando
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // Espionando o console.log -> jest.spyOn(objeto, 'método')
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Message sent:', 'teste');
  });
});
