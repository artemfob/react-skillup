import React, {ReactElement, useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export default function ProtectedRoute({children}:{children: React.ReactElement}): ReactElement {
    const {auth} = useContext(AuthContext);

    if (!auth) {
        return (<Navigate to='/login'/>)
    }
    return (children)
}