import axios from "axios";

const createPaymentCheckout = async (props: {}, user: string) => {
  if (!user) return;

  const response = await axios.post(
    import.meta.env.VITE_API_URL + "/api/create-payment-checkout",
    { props, user }
  );

  return response.data;
};

export { createPaymentCheckout };
