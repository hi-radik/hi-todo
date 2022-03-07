import React, {useState} from 'react'

export default function AddTodo({onCreate}) {

    function submitHandler (ev) {
        ev.preventDefault()
        if(value.trim()){
            onCreate(value)
            setValue('')
        }
        
    }
    let [value, setValue] = useState('')

  return (
    <form style={{marginBottom: '1rem', display: 'flex', flexDirection:'column'}} onSubmit = {submitHandler}>
        <input style={{marginBottom: '.5rem', fontWeight:'600', color: 'hsl(0, 0%, 29%)', outline: 'none', padding: '0 15px 0 15px', overflow: 'auto',padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
    userSelect: "none",}} value = {value} onChange = {ev => setValue(ev.target.value)} />
        <button style = {{height:'35px', outline:'none'}} class="button is-link small" type='submit'>Добавить</button>
    </form>
  )
}
