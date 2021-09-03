import React from 'react';
import { NavLink } from 'react-router-dom'
import "../styles/Navigation.css"

const list = [
    { name: "start", path: "/", exact: true },
    { name: "products", path: "/products" },
    { name: "contact", path: "/contact" },
    { name: "panel admin", path: "/admin" }
]



const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}><NavLink to={item.path} exact={item.exact ? item.exact : null}>{item.name}</NavLink></li>
    ))

    return (
        <nav className="main">
            <ul>
                {menu}
                {/* <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to='admin'>Admin</NavLink>
                </li> */}


            </ul>
        </nav>
    );
}

export default Navigation;