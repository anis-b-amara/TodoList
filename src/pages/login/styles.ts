import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    layout: {
      width: '30rem',
      margin: '0 auto',
      height: '30rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headline: {
			color: '#0E64ED',
			fontWeight: 500,
			fontSize: '45px',
    },
		card: {
			width: '100%',
			height: '80%',
			background: '#F0F0F0 0% 0% no-repeat padding-box',
			boxShadow: '0px 0px 12px #00000029',
			display: 'flex',
			padding:'20px',
			boxSizing: 'border-box',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
		textField: {
			backgroundColor: 'white',
			width: '100%',
		},
		marginTop: {
			marginTop: '20px',
		},
  })
)