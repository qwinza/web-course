import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const user = useLoaderData();

  return <h1>{JSON.stringify(user)}</h1>;
}

export default Profile;
