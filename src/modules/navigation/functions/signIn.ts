import axios from "axios";

const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/login",
      { email, password }
    );

    if (response.data.auth === false) {
      return response.data.message;
    } else {
      localStorage.setItem("token", "Bearer " + response.data.token);

      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

export default signIn;
