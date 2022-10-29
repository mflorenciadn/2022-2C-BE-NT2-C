import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Mockito",
    email: "test@test.com",
    password: "test",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Comenzaría en false y cambiaría al hacer el login a true

  // Acá iria toda la lógica para obtener los datos del usuario autenticado, signIn, signUp, signOut

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Luego se va a poder llamar a los datos del usuario desde cualquier componente de la siguiente manera:    const {user}= useAuth()

export default AuthContext;
