import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer} from "./navigationStyles";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }
  return (
    <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo title='Crown Clothing' className="logo" />
            </LogoContainer>

            <NavLinksContainer>
                <NavLink to={'/shop'} >
                    SHOP
                </NavLink>
                { currentUser ? (
                    <NavLink as='span' onClick={signOutHandler} className="nav-link">SIGN OUT</NavLink>
                )
                :
                (
                    <NavLink to={'/auth'} >
                        SIGN IN
                    </NavLink>
                )}
                
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
    </>
    )
}

export default Navigation
