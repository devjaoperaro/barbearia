import react from 'react'
import {Route, Switch} from 'react-router-dom';
import Signin from '../pages/Signin';


const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Signin}></Route>
        {/* <Route path='/adasd' component={}></Route> */}
    </Switch>    
);

export default Routes;  