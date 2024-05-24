import { priceFormat } from '@/server/utils/index';

describe('priceFormat', () => {
  it('should format price with 2 decimal places', () => {
    const price = '10';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('10.00');
  });

  it('should format price with 1 decimal place', () => {
    const price = '5.5';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('5.50');
  });

  it('should format price with no decimal places', () => {
    const price = '15.00';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('15.00');
  });

  it('should format price with more than 2 decimal places', () => {
    const price = '7.12345';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('7.12');
  });

  it('should format price with leading zeros', () => {
    const price = '0008.90';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('8.90');
  });

  it('should format price with trailing zeros', () => {
    const price = '12.5000';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('12.50');
  });

  it('should format price with thousands separator', () => {
    const price = '10000';
    const formattedPrice = priceFormat(price);
    expect(formattedPrice).toBe('10,000.00');
  });
});
