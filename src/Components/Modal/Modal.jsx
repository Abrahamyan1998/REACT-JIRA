import React, { useState } from 'react'
import Item from '../ItemsWork/Item';
import '../Modal/Modal.css'

export default function Modal({ bool, closeModal, AddInProgres, item, index, setBool, setBoolLength, datas, setFixName }) {

    const [name, setName] = useState('');
    return (
        <div className='modal'>
            <p className='close-modal' onClick={(e) => {
                setBool(bool === false);
                closeModal(e.target.parentElement);
                setBoolLength(true)
            }}>X</p>

            <div>
                <select onChange={(e) => {
                    setName(e.target.value);
                }}>
                    {datas.map(item => {
                        return (
                            <option value={item.name} key={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>


            <div className='center-items'>
                <Item item={item} />
                <button className='add-item' onClick={() => { AddInProgres(item, index); setBoolLength(true); setFixName(name); }}>Add to inPrrogres</button>
            </div>
        </div>
    )
}
