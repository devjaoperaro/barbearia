import React from 'react';

import { Route as RouteDOM, Redirect } from 'react-router-dom'
import { RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface routeProps extends RouteProps{
    isPrivate?: boolean;
    component: React.ComponentType;
}

// para saber se o usuario está autenticado, vamos utilizar o contexto de autenticacao

const Route: React.FC<routeProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { user } = useAuth();

    // location pega o historico de das rotas, para usar as setas de voltar
    return (
        <RouteDOM 
            {...rest}
            render={({ location }) => {
                return isPrivate == !!user ? (
                    <Component/>
                ) : (
                    <Redirect 
                        to={{ 
                            pathname: isPrivate ? '/' : 'dashboard',
                            state: { from: location },
                        }}
                    />
                ) 
            }}
        />
    )
}

export default Route;