import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import Now from './pages/Now';

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/work" component={Work}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/hobbies" component={Hobbies}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/now" component={Now}/>
            </Switch>
        </BrowserRouter>
    )
}