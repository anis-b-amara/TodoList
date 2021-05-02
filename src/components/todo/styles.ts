import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) =>
  createStyles({
    chipMain: {
      backgroundColor: '#03961A',
      color: 'white',
    },
    [theme.breakpoints.up('md')]: {
      todo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid#282c34',
        padding: '15px',
        boxSizing: 'border-box',
      },
      todoText: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      todoActions: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      todoItem: {
        '&:last-child': {
          borderBottom: 'none',
        },
      },
      flexRow: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
    [theme.breakpoints.down('sm')]: {
      todo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid#282c34',
        padding: '15px',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
        gap:'.5rem'
      },
      todoText: {
        width: '7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      todoActions: {
        width: '10rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      todoItem: {
        '&:last-child': {
          borderBottom: 'none',
        },
      },
      flexRow: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
  })
)
