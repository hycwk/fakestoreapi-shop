export function priceFormat(price: string) {
  const formattedPrice = parseFloat(price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return formattedPrice;
}
