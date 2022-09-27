import axios from "axios";

const getUserKeys = async (uuid: string) => {
  const response = await axios.post(
    import.meta.env.VITE_API_URL + "/api/get-user-keys",
    { uuid }
  );

  return response.data;
};

export { getUserKeys };
