import axios from "axios";

const getProductsData = async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/api/get-items-data"
  );

  return response.data;
};

export { getProductsData };
