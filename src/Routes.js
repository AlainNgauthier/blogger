import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import PostPage from './Post/PostPage';
import Header from './Header/Header';


const Routes = () => (
    <>
        <Router>
            <Header/>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/post/:id" component={PostPage} />
        </Router>
    </>
);

export default Routes;