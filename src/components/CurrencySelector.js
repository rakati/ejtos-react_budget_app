import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="mb-3 currency-selector">
            <select 
                className="form-select" 
                value={currency} 
                onChange={handleCurrencyChange}
                aria-label="Currency select"
            >
                <option value="$">Dollar</option>
                <option value="£">Pound</option>
                <option value="€">Euro</option>
                <option value="₹">Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
