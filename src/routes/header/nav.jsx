import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/dropdown";
import { CartContext } from "../../context/cart.context";
import './nav.scss';

import Logo from '../../images/logo/logo.png';

const Header = () => {
  const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment>
          <div className="navigation">
               <div>
                    <Link className="logo" to='/' >
                        <img src={Logo} width={70} height={70} alt="company logo" />
                    </Link>
                </div>
              <div className="nav-links-container">
                <Link className="nav-link" to='/shop' >
                    Shop
                </Link>
                <Link className="nav-link" to='/contact' >
                    Contact
                </Link>
                <CartIcon/>
              </div>
              { isCartOpen && <CartDropdown/> }
          </div>
          <Outlet/>
        </Fragment>
    )
  }

export default Header;