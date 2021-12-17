import React, { useState } from 'react';
import '../assets/toDoCard.css'

export const ToDoCard=(props)=>{
    const { text, index, deleteItem } = props
    const strikeCard=()=>{
        deleteItem(index)
    }
    return(
        <div className="card flex-container">
            <div className={`card-text ${text[1]===1?"striked":""}`}>{text[0]}</div>
            <div className="delete-icon button" onClick={()=>strikeCard()}>X</div>
        </div>
    )
}