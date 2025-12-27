import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider( { children }){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(){
        setIsAuthenticated(true);
    }

    function logout(){
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}