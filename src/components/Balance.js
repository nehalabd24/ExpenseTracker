import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    return (
        <>
            <div className='balance'>Your Balance</div>
            <div className='balanceAmount'>${total}</div>
            <div className='incomeAndExpenses'>
                <div className='expenses'>Income <span className='income green'>${income}</span></div>
                <div className='divider'></div>
                <div className='expenses'>Expense <span className='income red'>${expense}</span></div>
            </div>
        </>
    )
}

export default Balance