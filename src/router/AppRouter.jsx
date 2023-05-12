import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from '../components/Header';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/home" Component={Home}/>
                    <Route exact path="/about" Component={About}/>
                    <Route path="*" Component={Error404}/>
                </Routes>

            </Router>
        
    );
}

export default AppRouter;
