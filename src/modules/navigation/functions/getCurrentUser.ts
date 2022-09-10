import axios from "axios";

const getCurrentUser = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + "/api/get-current-user"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCurrentUser };
