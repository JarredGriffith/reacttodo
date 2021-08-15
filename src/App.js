
import './App.css';
import Form from './componets/form/form'
import React from 'react'; 


export default class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {todo:[]}
  this.addToDo =this.addToDo.bind(this); 
  }


 addToDo(date,todo){
  console.log(this.state)
    this.setState({todo:[...this.state, {date: date,toDo:todo}]})
    console.log(this.state)
 }
render(){
  return (
    <Form addToDo={this.addToDo}></Form>
    // <h1>test</h1>
  );}
}
