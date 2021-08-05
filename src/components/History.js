import React, { useContext } from 'react';
import './Style.css';

import { GlobalContext } from '../context/GlobalState';

export const History = () => {


    const { transactions } = useContext(GlobalContext);
    
    // const sign = transactions.totalAmount > 0 ? '+' : '-';
    // const tansType = transactions.totalAmount > 0 ? 'plus' : 'minus';
    
    
    return (
        <div>
            <h3>HISTORY</h3>
            <ul className="History">
                {transactions.map((v, i) => {
                    return (
                        <li>
                            <span className="trans-desc" key={i}>{v.desc}</span>
                            <span className="trans-amount" key={i}>${Math.abs(v.totalAmount)}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default History;