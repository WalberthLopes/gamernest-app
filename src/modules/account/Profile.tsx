import { useEffect, useState } from "react";
import { getCurrentUser } from "../navigation/functions/getCurrentUser";

import ProfileHeader from "./components/header.component";
import BodyComponent from "./components/body.component";
import Loading from "../navigation/components/loading.component";

type User = {
  coins: number;
  created_at: string;
  discord: string;
  email: string;
  perms: string;
  rank: string;
  role: string;
  username: string;
};

const Profile = () => {
  const [props, setProps] = useState<User>();

  useEffect(() => {
    const getData = async () => {
      const response = await getCurrentUser();
      setProps(response?.[0]);
    };
    getData();
  }, []);

  return props ? (
    <div>
      <ProfileHeader />

      <BodyComponent props={props} />
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
