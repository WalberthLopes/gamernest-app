import { useEffect } from "react";

import Auth from "../../account/functions/authentication";

const Loading = () => {
  useEffect(() => {
    Auth();
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
