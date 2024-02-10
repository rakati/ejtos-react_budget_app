import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const {budget, dispatch, currency} = useContext(AppContext);
	const [newBudget, setNewBudget] = useState(budget);
            
	const handleBudgetChange = (event) => {
		setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget, 10),
        });
    };

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {currency}  </span>
			<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}/>
		</div>
	);
};

export default Budget;
