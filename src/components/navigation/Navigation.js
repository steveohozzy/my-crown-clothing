import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import './navigation.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }
  return (
    <>
        <nav className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo title='Crown Clothing' className="logo" />
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link"to={'/shop'} >
                    SHOP
                </Link>
                { currentUser ? (
                    <span onClick={signOutHandler} className="nav-link">SIGN OUT</span>
                )
                :
                (
                    <Link className="nav-link"to={'/auth'} >
                        SIGN IN
                    </Link>
                )}
                
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
        </nav>
        <Outlet />
    </>
    )
}

export default Navigation
