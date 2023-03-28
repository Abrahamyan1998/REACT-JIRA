import React, { useEffect, useState, useMemo } from 'react'
import '../Container/Container.css'
import AddItem from '../AddItem/AddItem'
import ToDoCart from '../ToDoCart/ToDoCart';
import InPrrogres from '../InPrrogres/InPrrogres';
import Done from '../Done/Done';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Container() {

  const [toDoArr, setToDoArr] = useState([
    {
      ToDoTitle: 'ToDo',
      ToDoDescription: 'Create ToDo list',
      uuid: uuidv4(),
    },
    {
      ToDoTitle: 'Api request',
      ToDoDescription: 'Make a request from fakestoreapi',
      uuid: uuidv4(),
    },
  ]);
  const [inPrrogres, setInPrrogres] = useState([]);
  const [done, setDone] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [boolLength, setBoolLength] = useState(true);
  const [datas, setDatas] = useState([]);
  const [fixName, setFixName] = useState('');
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(res => setDatas(res.data));
  }, []);

  return (
    <div className='container'>
      <AddItem
        toDoArr={toDoArr} setToDoArr={setToDoArr} title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}
      />

      <div className='columns'>

        <div className='column'>
          <h1>ToDo</h1>
          <ToDoCart toDoArr={toDoArr} setToDoArr={setToDoArr} inPrrogres={inPrrogres} setInPrrogres={setInPrrogres} boolLength={boolLength} setBoolLength={setBoolLength} datas={datas} fixName={fixName} setFixName={setFixName}/>
        </div>

        <div className='column'>
          <h1>InPrrogres</h1>
          <InPrrogres inPrrogres={inPrrogres} setInPrrogres={setInPrrogres} done={done} setDone={setDone} boolLength={boolLength} setBoolLength={setBoolLength} fixName={fixName} />
        </div>

        <div className='column'>
          <h1>Done</h1>
          <Done done={done} setDone={setDone} boolLength={boolLength} setBoolLength={setBoolLength} />
        </div>
      </div>
    </div>
  )
}
