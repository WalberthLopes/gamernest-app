import axios from "axios";

const signUp = async (
  username: string,
  email: string,
  discord: string,
  password: string
) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/sign-up",
      {
        username,
        email,
        discord,
        password,
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default signUp;
