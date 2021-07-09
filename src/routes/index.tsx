import react from 'react'
import {Route, Switch} from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/SignUp';


const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>
    </Switch>    
);

export default Routes;  