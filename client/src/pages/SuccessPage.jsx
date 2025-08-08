import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/card";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CardContainer>
      <CardHeader>Order Received</CardHeader>
      <CardContent className="d-flex flex-column justify-content-center p-4 text-center gap-3">
        <picture>
          <source srcSet={`images/fireworks.webp`} type="image/webp" />
          <img
            src="images/fireworks.png"
            alt="Fireworks"
            className="img-fluid w-75 mx-auto success-firerwork"
            loading="lazy"
            aria-label="Fireworks illustration"
          />
        </picture>
        <h2 className="display-4 fw-semibold">Thank you!</h2>
        <p className="text-secondary lead fs-5 fw-normal">
          We have successfully received your order.
        </p>
      </CardContent>
      <CardFooter className="p-3 pb-2">
        <Button onClick={() => navigate("/")}>Submit another order</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default SuccessPage;
