import react from 'react'

function List (props) {

    console.log(props)
    const handleCLick = (id)=> {
        console.log(props.id, "test")
        props.removeToDO(props.id)
    }

    return(
        <div>
            <div className="card">
                <h4>{props.toDo}</h4>
                <p>Due Date: {props.date} </p>
                <button onClick={handleCLick}> Delete </button>
            </div>
        </div>

        // <li>
        //     {props.id}
        //     {props.toDo}
        //     <button onClick={handleCLick}> Delete </button>
        // </li>
    )
}

export default List

{/* <div class="container">
    <div  class="card" v-for="todo in todos">
        <h4>{{todo.text}}</h4>
        <p>Due Date: {{todo.date}} </p>
        <button @click="removeTodo(todo)">Compete Todo</button>
    </div>
  </div> */}