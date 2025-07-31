import React, { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/fetchProducts";
import Button from "../../components/ui/Button";
import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  ProductRecord,
  ProductListSkeleton,
} from "../../components/card";
import Alert from "../../components/Alert";
import { getItemsFromCart, calculateTotal } from "../../utils/cartCalculations";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const OrderPage = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [cart, setCart] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Convert a cart objet into array of item objects
  const items = useMemo(() => getItemsFromCart(cart), [cart]);

  // Calculate total price of products in the cart
  const total = useMemo(
    () => calculateTotal(data?.storage || [], cart),
    [data?.storage, cart]
  );

  const handleChange = (name, delta) => {
    setCart((prev) => {
      const current = prev[name] || 0;
      const product = data.storage.find((p) => p.name === name);
      if (!product) return prev;

      const next = current + delta;
      if (next < 0 || next > product.stock) return prev;

      return { ...prev, [name]: next };
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/order", { items });
      setCart({});
      navigate("/success");
    } catch (error) {
      setError(error.response?.data?.error || "Order failed");
    }
  };

  return (
    <CardContainer>
      <CardHeader>My Order</CardHeader>
      <CardContent className="overflow-scroll hide-scrollbar px-4">
        {isError && <Alert message="Failed to load products" />}
        {isLoading || isFetching ? (
          <ProductListSkeleton />
        ) : (
          data?.storage.map((product) => (
            <ProductRecord
              key={product.name}
              product={product}
              quantity={cart[product.name] || 0}
              onChange={handleChange}
            />
          ))
        )}
      </CardContent>
      <CardFooter className="px-3 pb-2">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p className="h5 fw-semibold">Total</p>
          <p className="h4 fw-bold">${total.toFixed(2)}</p>
        </div>
        {error && (
          <Alert
            message={error}
            duration={3000}
            clear={() => setError(null)}
            animate
          />
        )}
        <Button onClick={handleSubmit} disabled={total === 0 || error}>
          {isLoading || isFetching ? <LoadingSpinner /> : "Order"}
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default OrderPage;
