import { getCurrentUser } from "./getCurrentUser";

const isAuth = async () => {
  const response = await getCurrentUser();

  !response ? (location.href = "/") : null;
};

export { isAuth };
