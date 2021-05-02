import { Chip } from '@material-ui/core'
import React, { FC } from 'react'
import { TodoItem } from '../../pages/tasks/Index'
import { useStyles } from './styles'

type Props = {
  todo: TodoItem
}

export const Todo: FC<Props> = ({ todo }) => {
  const classes = useStyles()
  const { title, content, status } = todo

  return (
    <>
      <div className={`${classes.todo} ${classes.todoItem}`}>
        <div className={classes.todoText}>{title}</div>
        <div className={classes.todoText}>{content}</div>
        <div className={`${classes.flexRow} ${classes.todoActions}`}>
          {status ? (
            <Chip label='Completed' className={classes.chipMain} />
          ) : (
            <Chip label=' Not Completed' color='secondary' />
          )}
        </div>
      </div>
    </>
  )
}
