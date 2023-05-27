import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase_Config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const AuthInfo = {
        user
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;