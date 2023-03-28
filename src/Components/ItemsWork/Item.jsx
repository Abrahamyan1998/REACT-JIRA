import React from 'react'
import '../ItemsWork/Item.css'

export default function Item({ item, boolLength }) {
    return (
        <div className='title-description'>

            <div className='title'>
                <label htmlFor="title">Title:</label>
                <h1 id='title'>{item.ToDoTitle}</h1>
            </div>

            <div className='description'>
                <label htmlFor="description">Description:</label>
                <h1 id='description'>{boolLength ? `${item.ToDoDescription.substring(0, 10)}...` : item.ToDoDescription}</h1>
            </div>

            
        </div>
    )
}
