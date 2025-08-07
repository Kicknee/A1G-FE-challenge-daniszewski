import React from "react";
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
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useCart } from "../../hooks/useCart";

const OrderPage = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const navigate = useNavigate();

  const { cart, total, error, setError, updateQuantity, submitOrder } = useCart(
    data?.storage || []
  );

  const isLoadingState = isLoading || isFetching;

  const onSubmit = () => submitOrder(() => navigate("/success"));

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
              quantity={cart[product.name] || 0}
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
          onClick={onSubmit}
          disabled={total === 0 || isLoadingState}
        >
          {isLoadingState ? <LoadingSpinner /> : "Order"}
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default OrderPage;
