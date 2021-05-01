import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { FC } from 'react'
import { Tasks } from '../tasks/Index'
import { useStyles } from './styles'

export const Home: FC = () => {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.layout}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <h1>TODO APP</h1>
            <Button color="inherit">Logout</Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Tasks />
      </div>
    </Grid>
  )
}
