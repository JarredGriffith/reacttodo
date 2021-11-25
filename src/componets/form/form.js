import React, { useState } from 'react'; 

export const Form = (props) => {
    const[todo,setToDo] = useState(''); 
    const[doDate,setDoDate] = useState('');

    const handleSubmit = (e)=> {
        props.addToDo(doDate,todo)
        e.preventDefault(); 
    }

    return (
   <form onSubmit={handleSubmit}>
        <label>To do...</label>
            <input type="text" value={todo} onChange={(c)=> setToDo(c.target.value)} />
            <br/>
            <label>date</label>  
            <input type="date" value={doDate} onChange={(c)=> setDoDate(c.target.value)}></input>
            <br/>
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>           
     
    )
}

export default Form 
