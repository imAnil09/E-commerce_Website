import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddButtonComponent = () => {
    // const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
        // dispatch({ type: 'ITEM_INCREMENT', payload: { increment: count } })
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
            // dispatch({ type: 'ITEM_DECREMENT', payload: { decrement: count } })

        }
    }
    return (
        <div>
            <button className='py-1 px-5 rounded-md bg-gray-400 mr-3' disabled={count == 1 ? true : false} style={{ cursor: count == 1 && "not-allowed" }} onClick={handleDecrement}>-</button>
            {count}
            <button className='py-1 px-5 rounded-md bg-gray-400 ml-3' onClick={handleIncrement}>+</button>
        </div>
    )
}

export default AddButtonComponent