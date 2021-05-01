import { FC } from 'react'
import { Grid } from '@material-ui/core'
import { CreateTodo, Todo } from '../../components/Index'
import { useStyles } from './styles'

export interface TodoItem {
  id: number
  title: string
  content: string
  status: boolean
}
export const Tasks: FC = () => {
  const classes = useStyles()
  const todos: TodoItem[] = [
    {
      id: 1,
      title: 'Todo 1',
      content: 'Content Todo 1',
      status: true,
    },
    {
      id: 2,
      title: 'Todo 2',
      content: 'Content Todo 2',
      status: false,
    },
  ]
  return (
    <Grid container direction="column">
      <Grid container direction="column">
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
