import { Button } from '@material-ui/core'
import { FC, useState } from 'react'
import { useAppSelector } from '../../hooks'
import { selectTodo } from '../../slices/todos/todosSlice'
import TodoForm from '../todo-form/Index'

interface Props {
  todoId: string
}
const UpdateTodo: FC<Props> = ({ todoId }) => {
  const todo = useAppSelector(selectTodo(todoId))

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button size='medium' onClick={handleClickOpen}>
        Update
      </Button>
      <TodoForm
        setOpen={setOpen}
        todo={todo}
        handleClose={handleClose}
        open={open}
      />
    </div>
  )
}

export default UpdateTodo
