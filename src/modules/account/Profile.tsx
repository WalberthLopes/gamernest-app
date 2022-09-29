import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";

import ProfileHeader from "./components/header.component";
import BodyComponent from "./components/body.component";
import Loading from "../navigation/components/loading.component";

const Profile = () => {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const token = getToken.split(" ");

      if (token) {
        const decoded: any = jwtDecode(token?.[1]);

        setUsername(decoded.username);

        decoded.username ? setUser(true) : setUser(false);
      } else {
        console.log("No token has been found.");
      }
    } else {
      console.log("No bearer has been found.");
    }
  }, []);

  return user ? (
    <div>
      <ProfileHeader username={username} />

      <BodyComponent />
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
