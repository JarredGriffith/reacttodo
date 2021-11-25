import React from 'react'; 
import './App.css';
import Form from './componets/form/form'
import List from './componets/list/list'



export default class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {todo:[]}


  this.addToDo =this.addToDo.bind(this);
  this.removeToDO = this.removeToDO.bind(this);
  }


 addToDo(date,todo){
   const id = Math.floor(Math.random() * 10000)
  this.setState(prevState => ({
    todo: [...prevState.todo, {date: date,toDo:todo,id: id}]
  }))
    // this.setState({todo:[this.state, {date: date,toDo:todo}]})
    // console.log(this.state)
 }
 

 //removing the todo. 
 removeToDO(e) {
  var array = [...this.state.todo]; // make a separate copy of the array

  //filting state to only return anything that dosent have the same id
  const filterState = array.filter(data => data.id!==e)
  //setting the state to the filter state.
  this.setState({
    todo:filterState
  })
}

render(){
  let list = this.state.todo.map((list,i)=> {
    console.log(i); 
    return <List removeToDO={this.removeToDO} {...list} key={i} />
  })
  return (
    <div>
    <div className="container">
    <Form addToDo={this.addToDo}></Form>
    </div>
    <div className="card-list">
    {list}
    </div>
    </div>
  );}
}
