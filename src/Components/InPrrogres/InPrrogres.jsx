import React, { useState } from 'react'
import CheckBox from '../CheckBox/CheckBox';
import '../InPrrogres/InPrrogres.css'
import Item from '../ItemsWork/Item'

export default function InPrrogres({ inPrrogres, setInPrrogres, done, setDone, boolLength, setBoolLength, fixName }) {
    return (
        <div>
            {inPrrogres.map((item, index) => {
                return (
                    <div key={item.uuid}>
                        <div className='box'>
                            <Item item={item} boolLength={boolLength} setBoolLength={setBoolLength} />
                            <CheckBox item={item} index={index} done={done} setDone={setDone} inPrrogres={inPrrogres} setInPrrogres={setInPrrogres} />
                            <p>{fixName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
