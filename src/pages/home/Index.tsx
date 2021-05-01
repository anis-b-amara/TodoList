import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React, { FC } from 'react'

export const Home: FC = () => {
  return (
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
  )
}
