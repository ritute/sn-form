import { 
  makeStyles,
  withStyles,
  Tooltip,
} from '@material-ui/core'

import helpTooltipSvg from 'images/question-tooltip.svg'

const useStyles = makeStyles(theme => ({
  helpTooltip: {
    marginLeft: 10,
  },
  helpIcon: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    background: `url(${helpTooltipSvg})`,
    color: 'white',
  }
}))

const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#FFF',
    color: theme.palette.text.primary,
    border: '1px solid #EFEFEF',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
    padding: 8,
  },
  arrow: {
    color: '#FFF',
    fontSize: 16,
  }
}))(Tooltip)

const HelpTooltip = ({ helpContent }) => {
  const classes = useStyles()
  return (
    <StyledTooltip title={helpContent} placement='top' arrow className={classes.helpTooltip}>
      <div className={classes.helpIcon}></div>
    </StyledTooltip>
  )
}

export default HelpTooltip
