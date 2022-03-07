import React from "react";
import Button from "./Button";


const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
    userSelect: "none",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
   
  },
  input: {
    marginRight: "10px",
    cursor: "pointer",
    
    
  },

  label: {
    maxWidth: '500px',
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    
    
  },
};
export default function TodoItem({ todo, index, onChange}) {
  const classes = []
  if(todo.completed){
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span>
        <label className = {classes.join(' ')} style={styles.label} 
        onChange = {() => onChange(todo.id)}>
          <input style={styles.input} 
          check = {todo.completed}
          type="checkbox" />
          <strong>{index + 1}</strong>. {todo.title}
        </label>
      </span>
      <Button todo = {todo}/>
    </li>
  );
}
