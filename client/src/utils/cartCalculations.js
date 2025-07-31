// Convert a cart object into an array of item objects
export function getItemsFromCart(cart) {
  return Object.entries(cart)
    .filter(([, quantity]) => quantity > 0)
    .map(([name, quantity]) => ({ name, quantity }));
}

// Calculate total price of products in the cart
export function calculateTotal(storage, cart) {
  return storage.reduce((sum, p) => {
    return sum + (cart[p.name] || 0) * p.price;
  }, 0);
}
