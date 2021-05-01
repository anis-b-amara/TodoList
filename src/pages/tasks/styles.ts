import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
  createStyles({
    headline: {
      fontWeight: 500,
      fontSize: '35px',
      color: '#0E64ED',
    },
    content: {
      borderRadius: '12px',
      backgroundColor: 'white',
      marginTop: '2em',
    },
  })
)
