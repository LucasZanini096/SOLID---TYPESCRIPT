import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); // Limpa todos os mocks, antes de cada teste

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Lucas', 'Zanini', '47875112893');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Zanini');
    expect(sut).toHaveProperty('cpf', '47875112893');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Lucas', 'Zanini', '47875112893');
    expect(sut.getName()).toBe('Lucas Zanini');
    expect(sut.getIDN()).toBe('47875112893');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj properties', () => {
    const sut = createEnterpriseCustomer('EJEM', '15151354546');
    expect(sut.name).toBe('EJEM');
    expect(sut.cnpj).toBe('15151354546');
  });
  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('EJEM', '15151354546');
    expect(sut.getName()).not.toBeNull();
    expect(sut.getName()).toBe('EJEM');
    expect(sut.getIDN()).not.toBeNull();
    expect(sut.getIDN()).toBe('15151354546');
  });
});
