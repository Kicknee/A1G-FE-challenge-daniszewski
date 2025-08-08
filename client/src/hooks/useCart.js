import { useState, useMemo } from "react";
import { calculateTotalPrice } from "../utils/cartCalculations";

export const useCart = () => {
  const [cart, setCart] = useState({});

  const total = useMemo(() => calculateTotalPrice(cart), [cart]);

  const updateQuantity = (product, delta) => {
    setCart((prev) => {
      if (!product) return prev;

      const { name, price, stock } = product;
      if (!prev[name]) return { ...prev, [name]: { price, quantity: 1 } };

      const currentQty = prev[name].quantity;
      const next = currentQty + delta;
      if (next < 0 || next > stock) return prev;
      return { ...prev, [name]: { ...prev[name], quantity: next } };
    });
  };

  return {
    cart,
    total,
    setCart,
    updateQuantity,
  };
};
