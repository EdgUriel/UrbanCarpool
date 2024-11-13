import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Almacenar los datos del usuario

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para acceder al contexto
export const useUser = () => useContext(UserContext);
