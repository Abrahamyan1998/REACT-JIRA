import React, { useState } from 'react'
import '../ToDoCart/ToDoCart.css';
import Item from '../ItemsWork/Item';
import Modal from '../Modal/Modal';


export default function ToDoCart({ toDoArr, setToDoArr, inPrrogres, setInPrrogres, boolLength, setBoolLength, datas, fixName, setFixName }) {

    const [bool, setBool] = useState(true);

    const modalDiv = (value) => {
        if (bool) {
            value.style.display = "block"
        } else {
            value.style.display = "none"
        }
    }

    const closeModal = (value) => {
        if (bool === false) {
            value.style.display = "none"
        }
    }

    const AddInProgres = (item, index) => {
        setInPrrogres([
            ...inPrrogres,
            item
        ])
        const newTodo = [...toDoArr];
        newTodo.splice(index, 1);
        setToDoArr(newTodo);
    }

    return (
        <div>
            {toDoArr.map((item, index) => {
                return (
                    <div key={item.uuid}>
                        <div className='box1' >
                            <Item item={item} boolLength={boolLength} />
                            <div className='transparent-box' onClick={(e) => {
                                setBool(!bool);
                                modalDiv(e.target.parentElement.nextElementSibling);
                                setBoolLength(false)
                            }} ></div>
                        </div>

                        <Modal bool={bool} closeModal={closeModal} AddInProgres={AddInProgres} item={item} index={index} setBool={setBool} setBoolLength={setBoolLength} datas={datas} fixName={fixName} setFixName={setFixName} />
                    </div>
                )
            })}
        </div>
    )
}
