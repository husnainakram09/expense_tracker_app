import React, { useState, useContext } from 'react';
import "./Style.css";

import { GlobalContext } from '../context/GlobalState';



export const AddTrans = () => {

    const [desc, setDesc] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit =(e) =>{
        e.preventDefault();

        const newTrans = {
            id: new Date().getTime(),
            desc,
            totalAmount: +totalAmount
        }

        addTransaction(newTrans)
    }
    return (

        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Text
                        <br />
                    <input type="text"
                        placeholder="Enter text..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)} />
                </label>
                <br />
                <label>
                    Amount
                        <br />
                    <span>(negative-expense, positive-income)</span>
                    <br />
                    <input type="number"
                        placeholder="Enter amount..."
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)} />
                </label>
                <br />
                <button className="transaction-btn">
                    Add transaction
                    </button>
            </form>
        </div>
    )
}

export default AddTrans;