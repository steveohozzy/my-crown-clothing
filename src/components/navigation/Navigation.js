import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.scss';

const Navigation = () => {
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
                <Link className="nav-link"to={'/auth'} >
                    SIGN IN
                </Link>
            </div>
        </nav>
        <Outlet />
    </>
    )
}

export default Navigation
