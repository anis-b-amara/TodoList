import { Chip } from '@material-ui/core'
import React, { FC } from 'react'
import { Todo } from '../../interfaces/Todo'
import RemoveTodo from '../remove-todo/Index'
import UpdateTodo from '../update-todo/Index'
import { useStyles } from './styles'

type Props = {
  todo: Todo
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const classes = useStyles()
  const { title, content, status, id } = todo

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
          <UpdateTodo todoId={id} />
          <RemoveTodo todoId={id} />
        </div>
      </div>
    </>
  )
}
