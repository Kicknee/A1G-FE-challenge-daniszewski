import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/card";
import { ProductListSkeleton, ProductRecord } from "../components/product";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Button from "../components/ui/Button";
import Alert from "../components/Alert";

import { useCart } from "../hooks/useCart";
import { fetchProducts } from "../services/fetchProducts";
import { getItemsFromCart } from "../utils/cartCalculations";

const OrderPage = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { cart, total, setCart, updateQuantity } = useCart();

  const isLoadingState = isLoading || isFetching;

  const submitOrder = async () => {
    try {
      const items = getItemsFromCart(cart);
      await axios.post("/api/order", { items });
      setCart({});
      navigate("/success");
    } catch (err) {
      setError(err.response?.data?.error || err.message || "Order failed");
    }
  };

  return (
    <CardContainer>
      <CardHeader>My Order</CardHeader>
      <CardContent className="overflow-scroll hide-scrollbar px-4">
        {isError && <Alert message="Failed to load products" />}
        {isLoadingState ? (
          <ProductListSkeleton />
        ) : (
          data?.storage.map((product) => (
            <ProductRecord
              key={product.name}
              product={product}
              quantity={cart[product.name]?.quantity || 0}
              onChange={updateQuantity}
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
        <Button
          variant="primary"
          onClick={submitOrder}
          disabled={total === 0 || isLoadingState}
          aria-label="Submit order"
        >
          {isLoadingState ? <LoadingSpinner /> : "Order"}
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default OrderPage;
