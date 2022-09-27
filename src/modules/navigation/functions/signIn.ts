import axios from "axios";

const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/sign-in",
      { email, password }
    );

    if (response.data.success === false) {
      return response.data.message;
    } else {
      location.href = `/account/${response.data.message}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export default signIn;
