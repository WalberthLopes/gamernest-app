import axios from "axios";

const getCurrentUser = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_API_URL + "/api/get-current-user"
    );

    if (response.data !== false) {
      return response.data;
    } else return;
  } catch (error) {
    console.log(error);
  }
};

export { getCurrentUser };
