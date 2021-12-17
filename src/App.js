import './App.css';
import { ToDoCard } from './features/toDoCard';
import { useState } from 'react';

function App() {
    const [ toDoList, setToDoList ] = useState([])

    const verifyEnter=(event)=>{
        if(event.charCode===13){
            addNewItem()
        }
    }

    const addNewItem=()=>{
        let newItem = document.getElementById("textBox").value
        if(newItem!==''){
            let items = [ ...toDoList ]
            items = [[newItem,0], ...items]
            document.getElementById("textBox").value = ""
            setToDoList(items)
        }
    }

    const clearAll=()=>{
        let items = [...toDoList]
        let i = 0, length = items.length
        while(i < length){
            if(items[i][1]===1){
                items.splice(i, 1)
                length = items.length
            }else{
                i++
            }
        }
        setToDoList(items)
    }

    const deleteItem=(index)=>{
        let items = [ ...toDoList ]
        items[index][1] = 1
        setToDoList(items)
    }

    return (
        <div className="App">
            <div className="add-item-container flex-container">
                <input className="text-box" type="text" id="textBox" onKeyPress={(e)=>verifyEnter(e)} />
                <div className="add-button button" onClick={()=>addNewItem()}>+</div>
            </div>
            <div className="card-container flex-container">
                {toDoList.map((text, index)=><ToDoCard text={text} index={index} deleteItem={deleteItem} key={"card"+index} />)}
            </div>
            <div className="add-button button" onClick={()=>clearAll()}>Clear All</div>
        </div>
    );
}

export default App;
