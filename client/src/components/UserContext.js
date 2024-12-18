import React, {createContext, useState} from "react"; 

export const UserContext = createContext(); 

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null); 

    const addUser = (user) => {
        setUser(user);
    }

    return(
        <UserContext.Provider value={{user, addUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider; 
