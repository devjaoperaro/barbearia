import React, { useCallback, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

import api from '../services/api';
// funcao: Context é utilizado para repassar informações, dados para outros componentes .
// exemplo: Autenticação, vai carregar o nome e token para outras partes do Projeto

interface AuthState {
    token: string;
    user: object;
}

// formato das credenciais
interface SignInCredentials {
    email: string;
    password: string
}

// interface do context
interface AuthContextData{
    user: object; 
    // aqui recebe os acessos dos dados de email e senha
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void; 
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    // A função no useState só vai ser executada se o usuario dar um reload na pagina
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        // verifica se contem as informações
        if(token && user){
            // devolve o user no tipo objeto
            return { token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    })

    // quando ele logar, vai ser feito a autenticação
    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post('sessions', {
            email,
            password
        })

        // resposta do backend com o usuario e token
        const { token, user } = response.data;

        // criando localStorage para caso o usuario de reload na pagina
        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));
        
        setData({ token, user });
    }, [])

    // deslogar
    const signOut = useCallback(() => {
       localStorage.removeItem('@GoBarber:token');
       localStorage.removeItem('@GoBarber:user');

       return setData({} as AuthState);
    }, [])
    
    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export default AuthContext;