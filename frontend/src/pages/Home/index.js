import React from "react";
import { useDispatch } from "react-redux";
import { checkUser, logout } from "../../app/authSlice";
import { svg1 } from "../../assets";
import "./Home.css";
import Sidenav from "../../components/Home/Sidenav/Sidenav";
import { Outlet } from "react-router-dom";
import Header from "../../components/Home/Header/Header";

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

  return (
    <div className="dashboardWrapper">
      {/* <h1>Home</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <button
        onClick={() => {
          dispatch(checkUser()).then((res) => setUser(res.payload));
        }}
      >
        Check User
      </button>
      <div>
        <img src={svg1} alt="" />
        <h4>ID: {user?.user?._id}</h4>
        <h4>Name: {user?.user?.username}</h4>
      </div> */}
      <Sidenav />
      <div className="dashboardContentWrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
