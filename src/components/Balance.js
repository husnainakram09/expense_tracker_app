import React, {useContext} from 'react';
import './Style.css';

import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const totalBalance = transactions.map(transaction => transaction.totalAmount);
    const Balance = totalBalance
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    return (
        <div>
            <h4>
                <span className="total-balance">YOUR BALANCE</span>
                <br />
                <span className="total-amount">{Balance}</span>
            </h4>
        </div>
    );
}
