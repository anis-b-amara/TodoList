import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
  createStyles({
    chipMain: {
      backgroundColor: '#03961A',
      color: 'white',
    },
    todo: {
      width: '100%',
      display: 'flex',
      height: '80px',
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
  })
)
