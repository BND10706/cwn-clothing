import React from "react";
import './header.styles.scss'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link classname='logo-container' to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
    </div>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/shop'>Contact</Link>
        <Link className='option' to='/signin'>Sign In</Link>
  </div>
);

export default Header;