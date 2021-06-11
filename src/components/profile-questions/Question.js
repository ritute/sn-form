import { makeStyles } from '@material-ui/core'

import QuestionTitle from '../form/QuestionTitle'
import QuestionInstructions from '../form/QuestionInstructions'
import MobileHelpContent from '../form/MobileHelpContent'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
  },
  question: {
    marginTop: 16,
  },
}))

const Question = ({ title, instructions, required, helpContent, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <QuestionTitle required={required} helpContent={helpContent}>{title}</QuestionTitle>
      <QuestionInstructions>{instructions}</QuestionInstructions>
      <div className={classes.question}>{children}</div>
      <MobileHelpContent helpContent={helpContent} />
    </div>
  )
}

export default Question

