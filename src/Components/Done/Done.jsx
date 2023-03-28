import React from 'react'
import '../Done/Done.css'
import Item from '../ItemsWork/Item'

export default function Done({ done, boolLength, setBoolLength, setDone }) {

    const deleteItem = (index) => {
        const newDone = [...done];
        newDone.splice(index, 1);
        setDone(newDone);
    }

    return (
        <div >
            {done.map((item, index) => {
                return (
                    <div className='box' key={item.uuid} >
                        <Item item={item} boolLength={boolLength} setBoolLength={setBoolLength} />
                        <h3>YOUR PROJECT IS DONE</h3>
                        <button className='add-item' onClick={() => deleteItem(index)}>Delete item</button>
                    </div>
                )
            })}
        </div>
    )
}
