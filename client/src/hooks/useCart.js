// hooks/useCart.ts
import { useState, useMemo } from "react";
import axios from "axios";
import { getItemsFromCart, calculateTotal } from "../utils/cartCalculations";

export const useCart = (products = []) => {
  const [cart, setCart] = useState({});
  const [error, setError] = useState(null);

  const items = useMemo(() => getItemsFromCart(cart), [cart]);
  const total = useMemo(() => calculateTotal(products, cart), [products, cart]);

  const updateQuantity = (name, delta) => {
    setCart((prev) => {
      const current = prev[name] || 0;
      const product = products.find((p) => p.name === name);
      if (!product) return prev;
      const next = current + delta;
      if (next < 0 || next > product.stock) return prev;
      return { ...prev, [name]: next };
    });
  };

  const submitOrder = async (onSuccess) => {
    try {
      await axios.post("/api/order", { items });
      setCart({});
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || "Order failed");
    }
  };

  return {
    cart,
    total,
    error,
    setError,
    updateQuantity,
    submitOrder,
  };
};
