import { Typography } from '@material-ui/core'

import Question from './Question'
import QuestionError from '../form/QuestionError'
import Date from '../form/Date'

const areAllFieldsMissing = (errors) => {
  const errorTypes = Object.values(errors).map(error => error.type)
  return (errorTypes.length === 3) && 
    (errorTypes.filter(type => type !== 'required').length === 0)
}

// Display single error message:
// If all birthday date fields missing, show required error
// Otherwise invalid date error if errors exist
const getSingleError = (errors) => {
  let error = {}
  if (errors) {
    error.message = areAllFieldsMissing(errors) ? 'Date required' : 'Invalid date'
  }
  return error
}

const helpContent = (
  <Typography>
    Why we ask this: We might invite you to try certain products depending on your age.
  </Typography>
)

const Birthday = ({ control, errors }) => {
  const error = getSingleError(errors)
  return (
    <Question 
      title='When should we wish you a happy birthday?' 
      helpContent={helpContent} 
      required
    >
      <Date control={control} fieldName='birthday' required month day year />
      <QuestionError error={error} />
    </Question>
  )
}

export default Birthday
