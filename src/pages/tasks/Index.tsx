import { FC } from 'react'
import { Grid } from '@material-ui/core'
import { CreateTodo, Todo } from '../../components/Index'
import { useStyles } from './styles'
import { useAppSelector } from '../../hooks'
import { selectTodos } from '../../slices/todos/todosSlice'

export interface TodoItem {
  id: number
  title: string
  content: string
  status: boolean
}
export const Tasks: FC = () => {
  const classes = useStyles()
  const todos = useAppSelector(selectTodos)
  return (
    <Grid container direction='column'>
      <Grid container direction='column'>
        <h2 className={classes.headline}>
          Welcome User, keep up with your tasks
        </h2>
      </Grid>
      <CreateTodo />
      <div className={classes.content}>
        {todos.map((todo: TodoItem) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Grid>
  )
}
