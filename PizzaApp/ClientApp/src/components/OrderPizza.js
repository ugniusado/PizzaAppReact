import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './OrderPizza.css';
import pepperoniIcon from './icons/pepperoni.svg';
import mushroomIcon from './icons/mushroom.svg';
import chickenIcon from './icons/drumstick-bite-solid.svg';
import cheeseIcon from './icons/cheese-solid.svg';
import baconIcon from './icons/bacon-solid.svg';

function OrderPizza() {
    const [size, setSize] = useState('Small');
    const [toppings, setToppings] = useState([]);
    const [totalCost, setTotalCost] = useState(8);
    const [customTopping, setCustomTopping] = useState('');

    const handleAddCustomTopping = () => {
        if (customTopping) {
            setToppings([...toppings, customTopping]);
            setCustomTopping('');
        }
    };
    useEffect(() => {
        calculateTotal();
    }, [size, toppings]);

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleToppingChange = (e) => {
        const value = e.target.value;
        if (toppings.includes(value)) {
            setToppings(toppings.filter(t => t !== value));
        } else {
            setToppings([...toppings, value]);
        }
    };

    const calculateTotal = () => {
        let cost;
        switch (size) {
            case 'Medium':
                cost = 10;
                break;
            case 'Large':
                cost = 12;
                break;
            default:
                cost = 8;
                break;
        }

        cost += toppings.length;
        if (toppings.length > 3) {
            cost *= 0.9;
        }
        setTotalCost(cost);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = { size, toppingsList: toppings || [], totalCost };
        axios.post('/api/pizza', orderData)
            .then(res => {
                console.log('Order Saved!', res.data);
                toast.success('Order Saved Successfully!');
            })
            .catch(err => {
                console.error('Error saving order', err);
                toast.error('Error saving order');
            });
    };

    return (
        <div className='order-pizza-container'>
            <h1>Order Pizza</h1>
            <form onSubmit={handleSubmit} className='order-form'>
                <div className='form-group'>
                    <label>Size:</label>
                    <select value={size} onChange={handleSizeChange} className='fancy-select'>
                        <option value='Small'>Small (€8)</option>
                        <option value='Medium'>Medium (€10)</option>
                        <option value='Large'>Large (€12)</option>
                    </select>
                </div>
                <fieldset className='toppings-group'>
                    <legend>Toppings ($1 each):</legend>
                    <label className='topping-label'>
                        <input type='checkbox' value='Pepperoni' onChange={handleToppingChange} className='fancy-checkbox' />
                        <img src={pepperoniIcon} alt='Pepperoni' className='topping-icon' /> Pepperoni
                    </label>
                    <label className='topping-label'>
                        <input type='checkbox' value='Mushrooms' onChange={handleToppingChange} className='fancy-checkbox' />
                        <img src={mushroomIcon} alt='Mushrooms' className='topping-icon' /> Mushrooms
                    </label>
                    <label className='topping-label'>
                        <input type='checkbox' value='Cheese' onChange={handleToppingChange} className='fancy-checkbox' />
                        <img src={cheeseIcon} alt='Cheese' className='topping-icon' /> Cheese
                    </label>
                    <label className='topping-label'>
                        <input type='checkbox' value='Chicken' onChange={handleToppingChange} className='fancy-checkbox' />
                        <img src={chickenIcon} alt='Chicken' className='topping-icon' /> Chicken
                    </label>
                    <label className='topping-label'>
                        <input type='checkbox' value='Bacon' onChange={handleToppingChange} className='fancy-checkbox' />
                        <img src={baconIcon} alt='Bacon' className='topping-icon' /> Bacon
                    </label>
                    <div className='form-group'>
                        <label>Add Custom Topping:</label>
                        <input type='text' value={customTopping} onChange={(e) => setCustomTopping(e.target.value)} />
                        <button type='button' onClick={handleAddCustomTopping}>Add</button>
                    </div>
                </fieldset>
                <button type='submit'>Order</button>
            </form>
        </div>
    );
}

export default OrderPizza;
