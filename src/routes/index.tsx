import react from 'react'
import {Switch} from 'react-router-dom';

import Route from './Route';
import Signin from '../pages/Signin';
import Signup from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

// Quando formos criar as rotas, devemos pensar na função de quando sairmos do programa e entrarmos novamente
// se estivermos autenticados devemos ir para a tela privada (no caso uma home) e nao precisar fazer o login novamente,  
// Para isso criaremos um novo componente personalizado de Route com um atributo de privado, 
// para saber se é uma tela q deva ser autenticado para visualizar

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>

        <Route path='/dashboard' component={Dashboard} isPrivate></Route>
    </Switch>    
);

export default Routes;  