import {Stack} from "react-bootstrap";
import React, {useContext} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {ProductListContext} from "../context/ProductListContext";
import {AuthContext} from "../context/AuthContext";
import HomePage from "./HomePage";
import {CartPage, DetailsPage} from "./exports";
import ProtectedRoute from "../components/ProtectedRoute";
export default function MainPage() {
    const {auth} = useContext(AuthContext);

    return (
        <>
            <Header/>
            <Navigate to='/home'/>
            <Routes>
                <Route path="home" element={<HomePage/>}/>
                <Route path="cart" element={<ProtectedRoute auth={auth}>
                    <CartPage/>
                </ProtectedRoute>}/>
                <Route path="details" element={<DetailsPage/>}/>
            </Routes>
        </>
    );
}


function Header() {
    const {chosen} = useContext(ProductListContext)
    const navigate = useNavigate()
    return (
        <Stack
            className='header'
            direction="horizontal"
            gap={3}
        >
            <h3 onClick={()=>navigate('/home')}>Super market</h3>
            <p className="p-2 ms-auto" onClick={() => navigate('/cart')}>Cart ({chosen.length})</p>
        </Stack>
    );
}


