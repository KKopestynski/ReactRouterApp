import React from 'react';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'
import "../styles/Header.css"
import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'



const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3)
    console.log(index);

    const img = images[index]
    return (
        <>
            {/* <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="city1" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="city2" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="city3" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img3} alt="city3" />
                )} />
                <Route render={() => (
                    <img src={img1} alt="cityError" />
                    // <div style={{ lineHeight: "300px", backgroundColor: "yellow", textAlign: "center", verticalAlign: "middle ", color: "red" }}>
                    //     Error 404 - Page not found
                    // </div>
                )} />
            </Switch> */}
            <Route render={() => (<img src={img} alt="header" />)} />

        </>
    );
}

export default withRouter(Header);