import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import AuthContext, { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  
    <>
        <AuthProvider>
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>
        </AuthProvider>
        <GlobalStyles/>
    </>
)


export default App;
