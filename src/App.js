import React from 'react'; 
import './App.css';
import Form from './componets/form/form'
import List from './componets/list/list'



export default class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {todo:[]}
  this.addToDo =this.addToDo.bind(this); 
  }


 addToDo(date,todo){
  console.log(this.state)
  this.setState(prevState => ({
    todo: [...prevState.todo, {date: date,toDo:todo}]
  }))
    // this.setState({todo:[this.state, {date: date,toDo:todo}]})
    console.log(this.state)
 }


 //removing the todo. 
 removeToDO(e) {
  var array = [...this.state.todo]; // make a separate copy of the array
  var index = array.indexOf(e.target.value)
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({people: array});
  }
}

render(){
  let list = this.state.todo.map((list,i)=> {
    console.log(i); 
    return <List {...list} key={i} />
  })
  return (
    <div>
    <Form addToDo={this.addToDo}></Form>
    {list}
    </div>
  );}
}
