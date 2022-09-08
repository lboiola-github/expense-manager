import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

    const clickHandler = () => {
        document.querySelector('#root div h2').style.cssText = `border: solid red 2px;` 
        ;
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            <button style={{marginLeft: "10px", padding: "10px"}} onClick={clickHandler}>Hey, I'm a button!</button>
        </Card>
    )
}

export default ExpenseItem;