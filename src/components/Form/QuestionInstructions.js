import { withStyles, Typography } from '@material-ui/core'

const StyledTypography = withStyles(theme => ({
  root: {
    fontWeight: 400,
    fontSize: '0.8125rem',
    lineHeight: '1.125rem',
    marginTop: 8,
  },
}))(Typography)

const QuestionInstructions = ({ children, ...rest}) => {
  return children ? <StyledTypography>{children}</StyledTypography> : null
}

export default QuestionInstructions
