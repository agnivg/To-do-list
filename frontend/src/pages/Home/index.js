import React from "react";
import { useDispatch } from "react-redux";
import { checkUser, logout } from "../../app/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <button
        onClick={() => {
          dispatch(checkUser()).then((res) => setUser(res.payload));
        }}
      >
        Check User
      </button>
      <div>
        <h4>ID: {user?.user?._id}</h4>
        <h4>Name: {user?.user?.username}</h4>
      </div>
    </div>
  );
};

export default Home;
