import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../images/Icon/Logo.png';
const Header = (props) => {
    

    return (
        <nav className="navbar navbar-expand navbar-light bg-white my-2">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="travel guru "/>
                </Link>

                <ul className="navbar-nav align-items-center">
                    
                    <li className="nav-item">
                        {
                            auth.user
                                ? <Link to="/checkout" className="nav-link">{auth.user.displayName}</Link>
                                : <Link to="/login" className="nav-link">Login</Link>
                        }
                    </li>
                    <li className="nav-item">
                        {
                            auth.user
                                ? <Link to="/" className="nav-link">
                                        <button
                                            onClick={() => {
                                                auth.signOut()
                                            }}
                                            className="btn btn-danger btn-rounded">Sign Out</button>
                                    </Link>
                                : <Link to="/login" className="nav-link">
                                        <button className="btn btn-danger btn-rounded">Sign Up</button>
                                    </Link>
                        }

                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;