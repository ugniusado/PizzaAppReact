import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import OrderPizza from './components/OrderPizza';
import ViewOrders from './components/ViewOrders';

function App() {
    return (
        <div className='app-container'>
            <nav className='navigation'>
                <Link to='/'>Order Pizza</Link>
                <Link to='/view-orders'>View Orders</Link>
            </nav>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<OrderPizza />} />
                <Route path='/view-orders' element={<ViewOrders />} />
            </Routes>
        </div>
    );
}

export default App;