import React, {ReactElement} from "react";
import {Navigate, Outlet} from "react-router-dom";

interface IProtectedRoute{
    auth:boolean,
    children: React.ReactElement
}

export default function ProtectedRoute(props:IProtectedRoute):ReactElement{
    if(!props.auth){
        return (<Navigate to='/login' />)
    }
    return (props.children )
}