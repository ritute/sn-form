import { makeStyles, Hidden } from '@material-ui/core'

import questionSvg from 'images/question.svg'

const useStyles = makeStyles((theme) => ({
  mobileHelpContent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  questionIcon: {
    background: `url(${questionSvg})`,
    minWidth: 42,
    minHeight: 40,
    marginRight: 16,
  },
  helpContent: {},
}))

const MobileHelpContent = ({ helpContent }) => {
  const classes = useStyles()
  
  return helpContent ? (
    <Hidden smUp>
      <div className={classes.mobileHelpContent}>
        <div className={classes.questionIcon}></div>
        <div className={classes.helpContent}>{helpContent}</div>
      </div>
    </Hidden>
  ) : null
}

export default MobileHelpContent
