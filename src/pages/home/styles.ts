import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      backgroundColor: '#F8F8F8',
      height: '100vh',
    },
    container: {
      width: '70%',
      margin: '3em auto',
    },
  })
)
