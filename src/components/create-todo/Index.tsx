import React, { FC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { useStyles } from './styles'
import { useAppDispatch } from '../../hooks'
import { add } from '../../slices/todos/todosSlice'

export const CreateTodo: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id='alert-dialog-title'>Add New Task</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label='Task name'
              fullWidth
              value={''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value)
              }
            />
          </div>
          <div>
            <TextField
              label='Content'
              fullWidth
              value={''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value)
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            CANCEL
          </Button>
          <Button
            onClick={() =>
              dispatch(
                add({
                  id: 1,
                  content: 'content',
                  title: 'Title',
                  status: false,
                })
              )
            }
            color='primary'
            variant='contained'
            autoFocus
          >
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
