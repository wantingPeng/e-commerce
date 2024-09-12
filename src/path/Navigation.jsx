import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "./navigation.scss";
import { useContext } from "react";
import { SignOut } from "../utils/firebase";
import CartIcon from "../component/CartIcon";
import CartDropDown from "../component/CartDropDown";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";
import { SelctorCurrentUser } from "../store/user/selector";
const Navigation = () => {
  const currentUser = useSelector(SelctorCurrentUser); //pull out correspond state out from state tree in store
  const { isCartOpen } = useContext(CartContext);
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
