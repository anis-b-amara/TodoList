import React, { FC, useState } from 'react'
import { Button } from '@material-ui/core'
import TodoForm from '../todo-form/Index'

export const CreateTodo: FC = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant='contained'
        size='medium'
        color='primary'
        className='button'
        onClick={handleClickOpen}
      >
        CREATE A NEW TASK
      </Button>
      <TodoForm handleClose={handleClose} open={open} setOpen={setOpen} />
    </div>
  )
}
