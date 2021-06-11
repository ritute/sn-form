import { withStyles, Typography } from '@material-ui/core'

import errorSvg from 'images/error.svg'

const StyledTypography = withStyles(theme => ({
  root: {
    paddingTop: 12,
    color: theme.palette.error.main,
    '&:before': {
      background: `url(${errorSvg})`,
      content: '""',
      display: 'inline-block',
      verticalAlign: 'bottom',
      width: 24,
      height: 24,
      marginRight: 12,
    }
  },
}))(Typography)

const QuestionError = ({ error }) => {
  return error && error.message ? <StyledTypography>{error.message}</StyledTypography> : null
}

export default QuestionError
