import { addTodo, deleteTodo, setTodo } from './actions'
import { todos, formData } from './reducer'

describe('deletes todos', () => {
  it('deletes todo by id', () => {
    expect(todos([{ todo: 'second', date: 31313 }], deleteTodo(31313))).toEqual(
      []
    )
  })
})

describe('adds a todo', () => {
  it('add todo', () => {
    expect(todos([], addTodo('second', 31313))).toEqual([
      { todo: 'second', date: 31313 }
    ])
  })
})

describe('handles more todos', () => {
  it('acepts another todoto array', () => {
    expect(
      todos([{ todo: 'second', date: 31313 }], addTodo('anothersecond', 22222))
    ).toEqual([
      { todo: 'second', date: 31313 },
      { todo: 'anothersecond', date: 22222 }
    ])
  })
})
