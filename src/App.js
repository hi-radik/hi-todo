import React, {useEffect} from "react";
import TodoList from "./components/TodoList";
import 'bulma/css/bulma.min.css';
import {useState} from 'react';
import Context from './Context';
import AddTodo from './components/AddTodo.jsx';
import axios from 'axios';
import Loader from './Loader'
import Modal from './Modal/Modal'

// const AddTodo = React.lazy(() => new Promise(resolve => {
//   setTimeout(() => {
//     resolve(import ('./components/AddTodo'))
//   }, 3000);
// }))

function App() {

  let [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
  )
  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //     .then(res => {
  //       setTimeout(() => {
  //         const todos = res.data
  //         setTodos(todos)
  //         setLoading(false)
  //       }, 2000);
      
  //     })
    
  // }, [])
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      
      return todo
    }))
   
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const addTodo = (title) => {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
    }]))
  }
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Context.Provider value = {{deleteTodo}}>
      <div className="wrapper">
      <h1 className='title is-1' style={{textAlign: 'center', marginBottom:'2.5rem'}}>Список задач</h1>

      {/* <Modal/> */}
      {/* <React.Suspense fallback={<Loader/>}> */}
      <AddTodo onCreate = {addTodo}/>
      {/* </React.Suspense> */}
      <hr/>

      {/* {loading && <Loader/>} */}

      {todos.length
      ? <TodoList todos = {todos} onToggle = {toggleTodo} />
      // : loading ? null 
      : <h1 className='subtitle is-1' style={{textAlign: 'center', margin: '20% auto', border: '1px dashed #ccc', padding:'20px', borderRadius: '4px', maxWidth:'350px', color: '#ccc'}}>Задач нет :3</h1>
    }
      

      </div>
    </Context.Provider>
  );
}

export default App;
