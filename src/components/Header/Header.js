import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../reducers/StateProvider";
import { auth } from "../../reducers/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header logo"
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <nav className="header__nav">
        <Link to={!user ? "/login" : history}>
          <section onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? "Hello, " + user.email : "Hello, Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </section>
        </Link>
        <section className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </section>

        <Link to="/checkout">
          <section className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </section>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
