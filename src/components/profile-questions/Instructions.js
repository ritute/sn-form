import {
  makeStyles,
  Grid, Typography,
} from '@material-ui/core'

import conversationIconImage from 'images/icon-conversation.svg'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 96,
    textAlign: 'center',
  },
  icon: {
    background: `url(${conversationIconImage})`,
    width: 71,
    height: 64,
    marginBottom: theme.spacing(1),
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '2rem',
    lineHeight: '2.5rem',
    color: '#333',
  },
  description: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    padding: '0 8px',
    '& > a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    }
  },
}))

const Instructions = () => {
  const classes = useStyles()

  return (
    <Grid container alignItems='center' direction='column' spacing={1} className={classes.root}>
      <Grid item className={classes.icon}></Grid>
      <Grid item><Typography variant='h2' className={classes.title}>Tell us a bit about yourself!</Typography></Grid>
      <Grid item>
        <Typography className={classes.description}>
          Hesitant to share? Don’t be! We only use this info to match you to the right products. We will never, ever share it without your permission or even think about selling it. Read our <a href='/'>Privacy Policy</a> to learn more.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Instructions
