import {useContext} from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    
    const {user} = useContext(UserContext);
    const nav = useNavigate();

    if (!user) {
      return nav('/login');
    }
    return children
}