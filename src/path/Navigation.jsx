import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "./navigation.scss";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { SignOut } from "../utils/firebase";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  async function handleSignOut() {
    await SignOut();
    /*     setCurrentUser("");
     */
  }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/ ">
            Home
          </Link>
          <Link className="nav-link" to="/shop ">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
