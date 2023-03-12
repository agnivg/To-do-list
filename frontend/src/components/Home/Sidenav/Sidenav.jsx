import { NavLink } from "react-router-dom";
import { todoTick } from "../../../assets";
import { GiAlliedStar } from "react-icons/gi";
import { TfiViewListAlt } from "react-icons/tfi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import "./Sidenav.css";
const Sidenav = () => {
  const items = [
    {
      name: "Dashboard",
      route: "/",
      Image: TfiViewListAlt,
    },
    {
      name: "Create Task",
      route: "/createtask",
      Image: AiFillPlusCircle,
    },
    {
      name: "Store",
      route: "/store",
      Image: HiOutlineBuildingStorefront,
    },
    {
      name: "Profile",
      route: "/profile",
      Image: GiAlliedStar,
    },
  ];
  return (
    <div className="sidenavWrapper">
      <div className="logoWrapper">
        <img src={todoTick} alt="" />
        <span>Todo List</span>
      </div>
      <nav className="sidenavNavigation">
        {items.map((navitem) => (
          <Sidenavsingle
            Icon={navitem.Image}
            name={navitem.name}
            route={navitem.route}
          />
        ))}
      </nav>
    </div>
  );
};

const Sidenavsingle = ({ Icon, name, route }) => {
  return (
    <NavLink
      to={route}
      className="navsingle"
      style={({ isActive, isPending }) => {
        return {
          backgroundColor: isActive ? "var(--blue)" : "",
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "var(--white)" : "var(--greylight)",
        };
      }}
    >
      <Icon size={30} />
      {name}
    </NavLink>
  );
};
export default Sidenav;
