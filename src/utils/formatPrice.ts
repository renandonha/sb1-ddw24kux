export function formatPrice(price: string): string {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''));
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numericPrice);
}