import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    let expenseAmount = props.amount;

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('New value for the title; yehhhhhhhhhhhh!')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            <button style={{marginLeft: "10px", padding: "10px"}} onClick={clickHandler}>Hey, I'm a button!</button>
        </Card>
    )
}

export default ExpenseItem;