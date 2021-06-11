import { makeStyles } from '@material-ui/core'

import checkmarkSvg from 'images/checkmark.svg'

// Used for both radios and checkboxes
export const useFormOptionStyles = makeStyles(theme => ({
  group: {
    display: 'grid',
    gridAutoRows: '1fr',
    gridGap: '8px',
    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [theme.breakpoints.only('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  control: {
    opacity: 0,
    width: 0,
    padding: 0,
  },
  formControlLabel: {
    background: '#FBFBFB',
    border: '1px solid #CCCCCC',
    boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    padding: 18,
    margin: 0,
    '&:hover': {
      textDecoration: 'none',
      background: '#FBFBFB',
      border: '1px solid rgb(8, 173, 205)',
      boxShadow: 'rgb(55 192 192 / 10%) 0px 0px 10px inset',
    },
    '& > .MuiFormControlLabel-label': {
      display: 'block',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      margin: '0 auto',
      textAlign: 'center',
    }
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  selected: {
    background: theme.palette.primary.main,
    borderColor: 'transparent',
    boxShadow: 'none',
    position: 'relative',
    '&:after': {
      background: `url(${checkmarkSvg})`,
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 11,
      height: 8,
      top: 4,
      right: 4,
    },
    '& > span': {
      color: 'white',
    },
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: 'transparent',
      boxShadow: 'none',
    }
  },
}))