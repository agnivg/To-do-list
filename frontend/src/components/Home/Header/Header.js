import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { trophy } from "../../../assets";
const Header = () => {
  return (
    <div className="headerwrapper">
      <Searchbar />
      <div className="headerbuttonwrapper">
        <NotificationIcon Icon={IoMdNotificationsOutline} />
        <ProfileIcon image={trophy} />
      </div>
    </div>
  );
};

const Searchbar = () => {
  return (
    <div className="searchwrapper">
      <CiSearch color="white" fontSize={20} />
      <input type="text" placeholder="Search For task..." />
    </div>
  );
};

const NotificationIcon = ({ Icon }) => {
  return (
    <>
      <Iconround Icon={Icon} />
    </>
  );
};
const ProfileIcon = ({ image }) => {
  return (
    <>
      <Iconround image={image} />
    </>
  );
};
const Iconround = ({ Icon, image }) => {
  return (
    <button className="roundIcon">
      {Icon && <Icon size={25} />}
      {image && <img src={image} />}
    </button>
  );
};

export default Header;
