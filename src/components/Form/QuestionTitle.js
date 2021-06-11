import { makeStyles, Hidden, Typography } from '@material-ui/core'
import HelpTooltip from './HelpTooltip'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > p': {
      fontWeight: 'bold',
      fontSize: '1.0625rem',
      lineHeight: '1.5rem',
      color: '#333333',
    },
  }
}))

const QuestionTitle = ({ required, helpContent, children, ...rest}) => {
  const classes = useStyles()
  const requiredOrOptionalString = required ? '*' : ' (optional)'
  
  return (
    <div className={classes.root} {...rest}>
      {typeof children !== 'string' ? 
        <>
          {children}
          <Typography>{requiredOrOptionalString}</Typography>
        </> 
        : <Typography>{children}{requiredOrOptionalString}</Typography>}
      {helpContent && (
          <Hidden xsDown><HelpTooltip helpContent={helpContent} /></Hidden>
        )}
    </div>
  )
}

export default QuestionTitle
