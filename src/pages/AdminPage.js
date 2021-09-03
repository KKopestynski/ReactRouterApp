import React from 'react';
import { Route, Redirect } from 'react-router';


const permission = false;

const AdminPage = () => {


    return (
        <Route render={() => (
            permission ? (<h3>Admin Panel - Welcome</h3>) : (<Redirect to="/login" />
            )
        )} />
    )
}

export default AdminPage;