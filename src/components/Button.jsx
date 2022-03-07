import React, {useContext} from 'react'
import Context from '../Context'

export default function Button({todo}) {
 
  const {deleteTodo} = useContext(Context)
  return (
    <button className='delete' onClick={() => deleteTodo(todo.id)}></button>
  )
}
