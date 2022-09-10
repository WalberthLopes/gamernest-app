import { getCurrentUser } from "./getCurrentUser";

const isAuth = async () => {
  const response = await getCurrentUser();

  if (response) return true;
  else return false;
};

export { isAuth };
