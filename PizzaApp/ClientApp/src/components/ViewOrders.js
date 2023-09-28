import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ViewOrders.css';

function ViewOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get('/api/pizza')
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.error('Error fetching orders', err);
                toast.error('Error fetching orders');
            });
    };

    const deleteOrder = (id) => {
        axios.delete(`/api/pizza/${id}`)
            .then(res => {
                toast.success('Order Deleted Successfully!');
                fetchOrders();
            })
            .catch(err => {
                console.error('Error deleting order', err);
                toast.error('Error deleting order');
            });
    };

    return (
        <div className='view-orders-container'>
            <h1>View Orders</h1>
            <ul className='orders-list'>
                {orders.map(order => (
                    <div key={order.id} className='order-card'>
                        <p>Order no. {order.id}</p>
                        <p>{order.size} Pizza</p>
                        <p>Toppings: {order.toppingsList ? order.toppingsList.join(', ') : 'None'}</p>
                        <p>Total Cost: €{order.totalCost.toFixed(2)}</p>
                        <button onClick={() => deleteOrder(order.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ViewOrders;