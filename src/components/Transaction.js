import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    let cn = transaction.amount > 0 ? "plus" : "minus";
    let sign = transaction.amount > 0 ? "+" : "-";
    return (
        <li className={cn}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete">x</button>
        </li>
    )
}

export default Transaction