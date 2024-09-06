import Categories from "./Categories";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <Link className="nav-link" to="/ ">
          Home
        </Link>
        <Link className="nav-link" to="/shop ">
          SHOP
        </Link>
        <Link className="nav-link" to="/authentication">
          SIGN IN
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
