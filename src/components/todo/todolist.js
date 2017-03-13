import React from 'react'
import {TodoItem} from './todoitem'

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          // <TodoItem id={todo.id} name={todo.name} />
          <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo}
            handleRemove={props.handleRemove} />
        )
      }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos:React.PropTypes.array.isRequired
}
