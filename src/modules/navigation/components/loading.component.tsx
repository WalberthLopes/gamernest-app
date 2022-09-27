import { useEffect } from "react";
import { getCurrentUser } from "../functions/getCurrentUser";

const Loading = () => {
  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      if (!user) location.href = "/";
    };
    getUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        backgroundColor: "black",
      }}
    >
      Validando...
    </div>
  );
};

export default Loading;
