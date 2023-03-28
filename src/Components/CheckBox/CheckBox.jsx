import React, { useState } from 'react'
import '../CheckBox/CheckBox.css'

export default function CheckBox({ item, index, done, setDone, inPrrogres, setInPrrogres }) {

    const [checkBool, setCheckBool] = useState(false);

    const addToDone = (item, index) => {
        if (checkBool) {
            setDone([
                ...done,
                item
            ])
            const newPrrogres = [...inPrrogres];
            newPrrogres.splice(index, 1);
            setInPrrogres(newPrrogres);
        }
        setCheckBool(false);
    }

    return (
        <div className='check-box'>
            <label htmlFor="check">If it is done check</label>
            <input id='check' className="custom-checkbox" type="checkbox" checked={checkBool} onChange={(e) => { setCheckBool(e.target.checked) }} />
            <button className='add-item' onClick={() => addToDone(item, index)}>Add to done</button>
        </div>
    )
}
