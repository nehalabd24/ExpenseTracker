import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const NewTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { transactions, addTransaction } = useContext(GlobalContext)
    const onsubmit = (e) => {
        e.preventDefault();
        const transaction_new = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }
        addTransaction(transaction_new);
        setAmount(0);
        setText("");
    }
    return (
        <>
            <div className='newTransaction'>Add new transaction</div>
            <form onSubmit={onsubmit}>
                <label htmlFor='text'>Text</label>
                <input type='text' id='text' placeholder='Enter text...' name='text' className='input' value={text} onChange={(e) => setText(e.target.value)} />
                <label htmlFor='number'>Amount</label>
                <div className='info'>(negative - expense, positive - income)</div>
                <input type='number' id='number' placeholder='Enter amount...' name='number' className='input' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button className='transactionAddBtn'>Add transaction</button>
            </form>
        </>
    )
}

export default NewTransaction