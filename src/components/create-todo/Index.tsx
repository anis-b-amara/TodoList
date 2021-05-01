import { Button } from '@material-ui/core'
import React, { FC } from 'react'

export const CreateTodo: FC = () => {
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className="button"
      >
        CREATE A NEW TASK
      </Button>
    </div>
  )
}
