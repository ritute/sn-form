import { Typography } from '@material-ui/core'

import Question from './Question'
import CheckboxGroup from '../form/CheckboxGroup'

const options = [
  {
    label: 'Myself',
    value: 'myself'
  },
  {
    label: 'My Significant Other',
    value: 'significantOther'
  },
  {
    label: 'My Children',
    value: 'children'
  },
  {
    label: 'My Housemate',
    value: 'housemate'
  },
  {
    label: 'My Cat',
    value: 'cat'
  },
  {
    label: 'My Dog',
    value: 'dog'
  },
]

const helpContent = (
  <Typography>
    Why we ask this: We want to invite you to try products that suit you and your household.
  </Typography>
)

const ShopFor = ({ control, setValue, clearErrors }) => {
  return (
    <Question 
      title='Who do you normally shop for?' 
      instructions='Select all that apply.' 
      required 
      helpContent={helpContent}
    >
      <CheckboxGroup 
        name='shopFor'
        options={options} 
        control={control}
        setValue={setValue}
        clearErrors={clearErrors}
      />
    </Question>
  )
}

export default ShopFor

