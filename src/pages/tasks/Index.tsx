import { FC } from 'react'
import { Grid } from '@material-ui/core'
import { CreateTodo, TodoItem } from '../../components/Index'
import { useStyles } from './styles'
import { useAppSelector } from '../../hooks'
import { selectTodos } from '../../slices/todos/todosSlice'
import { Todo } from '../../interfaces/Todo'
import { setTodosToLocalstorage } from '../../services/LocalStorage'

export const Tasks: FC = () => {
  const classes = useStyles()
  const todos: Todo[] = useAppSelector(selectTodos)
  setTodosToLocalstorage(todos)
  return (
    <Grid container direction='column'>
      <Grid container direction='column'>
        <h2 className={classes.headline}>
          Welcome User, keep up with your tasks
        </h2>
      </Grid>
      <CreateTodo />
      <div className={classes.content}>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Grid>
  )
}
