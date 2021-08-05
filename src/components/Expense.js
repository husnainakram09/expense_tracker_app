import React, { useContext } from 'react';
import './Style.css';
import { GlobalContext } from '../context/GlobalState';

export const Expense = () => {
    const { transactions } = useContext(GlobalContext);
    const totalAmount = transactions.map(transaction => transaction.totalAmount);

    const income = totalAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = totalAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);
    return (
        <div className="div3">
            <div>
                <h4>
                    <span className="total-income">INCOME</span>
                    <br />
                    <span className="income-amount plus">{income}</span>
                </h4>
            </div>
            <div>
                <h4>
                    <span className="total-expense">EXPENSE</span>
                    <br />
                    <span className="expense-amount minus">{expense}</span>
                </h4>
            </div>
        </div>
    );
}

