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


render(){
  let list = this.state.todo.map(list=> {
    return <List {...list} />
  })
  return (
    <div>
    <Form addToDo={this.addToDo}></Form>
    {list}
    </div>
  );}
}
