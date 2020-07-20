import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';


const Router=()=>{
    return <div>
        <Route exact path='/' component={LoginForm}></Route>
        <Route path='/dash' component={Dashboard}></Route>
    </div>
}

export default Router;