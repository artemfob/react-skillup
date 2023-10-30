import {Stack} from "react-bootstrap";
import React, {useContext} from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import {ProductListContext} from "../context/ProductListContext";
import HomePage from "./HomePage";
import {CartPage, DetailsPage} from "./exports";
import ProtectedRoute from "../components/ProtectedRoute";

function MainPage() {


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="cart" element={<ProtectedRoute>
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
            <h3 onClick={() => navigate('/')}>Super market</h3>
            <p className="p-2 ms-auto" onClick={() => chosen.length>0&& navigate('/cart')}>Cart ({chosen.length})</p>
        </Stack>
    );
}


export default MainPage