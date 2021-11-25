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

    )
}

export default List
