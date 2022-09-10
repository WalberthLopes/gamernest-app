import axios from "axios";

const signOut = async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/api/sign-out"
  );

  if (response.data === false) {
    return false;
  } else {
    return true;
  }
};

export { signOut };
