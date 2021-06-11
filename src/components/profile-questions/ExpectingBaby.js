import Question from './Question'
import QuestionError from '../form/QuestionError'
import RadioGroup from '../form/RadioGroup'
import Date from '../form/Date'

const options = [
  {
    label: 'Yes',
    value: 'yes'
  },
  {
    label: 'No',
    value: 'no'
  },
]

const ExpectingBaby = ({ control, gender, isExpecting, errors }) => {
  let error = {}
  if (errors) errors.message = 'Invalid date'
  
  return (gender === 'female') ? (
    <>
      <Question title='Are you expecting a baby?' required>
        <RadioGroup 
          name='expectingBaby'
          options={options} 
          control={control}
        />
      </Question>
      {isExpecting === 'yes' && (
        <Question title='Congrats! When are you due?'>
          <Date control={control} fieldName='babyDueDate' month year />
          <QuestionError error={error} />
        </Question>
      )}
    </>
  ) : null
}

export default ExpectingBaby
