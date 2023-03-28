import { React } from 'react'
import './AddItem.css'
import { v4 as uuidv4 } from 'uuid';

export default function AddItem({ toDoArr, setToDoArr, title, setTitle, description, setDescription }) {
  return (
    <form className='form' action="" onSubmit={(e) => {
      e.preventDefault();
      setToDoArr([
        ...toDoArr,
        {
          ToDoTitle: title,
          ToDoDescription: description,
          uuid: uuidv4(),
        }
      ]);
      setTitle('');
      setDescription('');
    }

    }>
      <input className='input' placeholder='Enter your title' type="text" value={title} onChange={(e) => {
        setTitle(
          e.target.value
        )
      }} />
      <input className='input' placeholder='Enter your description' type="text" value={description} onChange={(e) => {
        setDescription(
          e.target.value
        )
      }} />

      <button className='add-item'>Add Item</button>
    </form>
  )
}
