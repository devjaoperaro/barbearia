import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import AppProvider  from './context';


const App: React.FC = () => (
    
    <>
        <AppProvider>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
        </AppProvider>


        <GlobalStyles/>
    </>

)
    

export default App;
