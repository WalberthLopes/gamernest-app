import axios from "axios";

const Auth = async () => {
  await axios
    .get(import.meta.env.VITE_API_URL + "/api/authentication", {
      headers: {
        authorization: localStorage.getItem("token") as string,
      },
    })
    .then((response) => {
      const auth = response.data.auth;
      if (auth !== true) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
};

export default Auth;
