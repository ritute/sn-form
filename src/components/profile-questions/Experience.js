import Question from './Question'
import CheckboxGroup from '../form/CheckboxGroup'

const options = [
  {
    label: 'I never buy them',
    value: 'neverBuy'
  },
  {
    label: 'I don\'t normally buy them',
    value: 'dontBuy'
  },
  {
    label: 'I only buy them on sale',
    value: 'onlySale'
  },
  {
    label: 'I buy them whenever I can',
    value: 'wheneverCan'
  },
  {
    label: 'I only shop natural/organic',
    value: 'onlyNaturalOrganic'
  },
]

const Experience = ({ control, setValue, clearErrors }) => {
  return (
    <Question 
      title='My experience with natural/organic products is:' 
      required 
    >
      <CheckboxGroup 
        name='experience'
        options={options} 
        control={control}
        setValue={setValue}
        clearErrors={clearErrors}
      />
    </Question>
  )
}

export default Experience

