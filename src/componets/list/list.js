import react from 'react'

function List (props) {
    return(
        <li>
            {props.toDo}
            <button> Delete </button>
        </li>
    )
}

export default List