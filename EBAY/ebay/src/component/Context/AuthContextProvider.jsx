import { createContext, useState } from "react";

export const myContext = createContext();

function AuthContextProvider({children}) {

    const [ authState, setAuthState] = useState({isAuth: false, token: ''})

    const loginUser = (token) => {
        setAuthState({...authState, isAuth: true, token: token})
    }

    const logoutUser = () => {
        setAuthState({...authState, isAuth: false, token: ''})
    }

    return (
        <myContext.Provider value={{authState, loginUser, logoutUser}}>
            {children}
        </myContext.Provider>
    )
}

export default AuthContextProvider;