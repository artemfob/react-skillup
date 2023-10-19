import React, {createContext, useState} from "react";
import IAuthContext from "../models/auth_context";


export const AuthContext = createContext<IAuthContext>({
    token: '',
    auth: false,
    login: () => {
    }
})

export const AuthState = ({children}: { children: React.ReactNode }) => {

    const [auth, setAuth] = useState<boolean>(false)

    const login = () =>
        setAuth(true);


    return (
        <AuthContext.Provider value={{token: '', auth: auth, login}}>
            {children}
        </AuthContext.Provider>
    )
}