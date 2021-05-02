import React, { FC, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import { useStyles } from '../create-todo/styles'
import { useAppDispatch } from '../../hooks'
import { remove } from '../../slices/todos/todosSlice'

interface Props {
  todoId: string
}

const RemoveTodo: FC<Props> = ({ todoId }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRemove = () => {
    dispatch(remove({ id: todoId }))
  }

  return (
    <div>
      <Button size='medium' className='button' color='secondary' onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id='alert-dialog-title'>Remove Task</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this task ?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            CANCEL
          </Button>
          <Button color='secondary' variant='contained' onClick={handleRemove} autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default RemoveTodo
