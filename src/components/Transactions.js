import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const Transactions = () => {

    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <div className='history'>History</div>
            <ul className='list'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default Transactions