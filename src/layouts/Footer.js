import React from 'react';
import { Route } from 'react-router-dom';
import "../styles/Footer.css";
const Footer = () => {
    return (
        <div>
            <h2>Footer for Developer</h2>
            <Route path="/" exact render={() => (
                <p>You are on <span>Main Page</span></p>
            )
            } />

            <Route path="/:page" exact render={(props) => {
                console.log(props);

                return (
                    <>
                        <p>Użyłeś param: <span>{props.match.params.page}</span></p>
                        <p>Jesteś na URL: <span>{props.match.url}</span></p>
                        <p>Jesteś na Path: <span>{props.match.path}</span></p>
                    </>
                )
            }} />

            <Route path="/:page/:idProduct" exact render={(props) => {
                console.log(props);
                return (
                    <>
                        <p>Użyłeś param: <span>{props.match.params.idProduct}</span></p>
                        <p>Jesteś na URL: <span>{props.match.url}</span></p>
                        <p>Jesteś na Path: <span>{props.match.path}</span></p>
                    </>
                )
            }} />

        </div>
    );
}

export default Footer;