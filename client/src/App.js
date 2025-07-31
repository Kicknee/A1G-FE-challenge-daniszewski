// client/src/App.js

import React from "react";
import "./styles/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OrderPage from "./pages/order/OrderPage";
import SuccessPage from "./pages/order/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <OrderPage />, errorElement: <NotFoundPage /> },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
