// Convert a cart object into an array of item objects
export function getItemsFromCart(cart) {
  return Object.entries(cart)
    .filter(([, { quantity }]) => quantity > 0)
    .map(([name, { quantity }]) => ({ name, quantity }));
}

// Calculate total price of products in the cart
export function calculateTotalPrice(cart = {}) {
  return Object.entries(cart).reduce((sum, [, item]) => {
    return sum + item.quantity * item.price;
  }, 0);
}
