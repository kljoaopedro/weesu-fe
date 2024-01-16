import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/" exact element={<Home />}/>
                <Route path="/:itemId/details" element={<ProductDetails />}/>
            </Routes>
        </Router>
    )
}

export default App;
