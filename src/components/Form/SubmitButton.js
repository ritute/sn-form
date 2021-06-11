import { 
  withStyles, 
  Button 
} from '@material-ui/core'

const StyledButton = withStyles(theme => ({
  root: {
    textDecoration: 'uppercase',
    background: theme.palette.background.gradient,
    boxShadow: '0px 4px 16px rgba(209, 35, 157, 0.15)',
    borderRadius: 4,
    padding: '16px 100px',
    '&:hover': {
      background: theme.palette.background.gradientHover,
      boxShadow: 'none',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    }
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '1px',
  },
}))(Button)

const SubmitButton = ({ label = 'Submit', onSubmit, ...rest }) => {
  return (
    <StyledButton 
      variant='contained' 
      // onClick={onSubmit} 
      type='submit'
      {...rest}
    >
      {label}
    </StyledButton>
  )
}

export default SubmitButton
