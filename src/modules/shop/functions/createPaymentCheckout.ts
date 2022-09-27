import axios from "axios";

const createPaymentCheckout = async (props: {}, userData: {}) => {
  if (!userData) return;

  const response = await axios.post(
    import.meta.env.VITE_API_URL + "/api/create-payment-checkout",
    { props, userData }
  );

  return response.data;
};

export { createPaymentCheckout };
