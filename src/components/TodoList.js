import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, setTodo } from '../store/actions'

const TodoList = ({ addTodo, deleteTodo, todos, setTodo, todo }) => (
  <div>
  
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(todo, Date.now())
        setTodo('')
      }}
    >
      <input
        placeholder='Todo'
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
      <input type='submit' value='Add' />
    </form>

    <ul>
      {todos.map(todo => (
        <li key={todo.date}>
          {todo.todo} - <button onClick={e => deleteTodo(todo.date)}>X</button>
        </li>
      ))}
    </ul>

  </div>
)

const mapDispatchToProps = {
  setTodo: setTodo,
  addTodo: addTodo,
  deleteTodo: deleteTodo
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
    todo: state.formData.todo
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
