import { Typography } from '@material-ui/core'

import Question from './Question'
import CheckboxGroup from '../form/CheckboxGroup'

const options = [
  {
    label: 'Walmart',
    value: 'walmart'
  },
  {
    label: 'Whole Foods',
    value: 'wholeFoods'
  },
  {
    label: 'Save On Foods',
    value: 'saveOnFoods'
  },
  {
    label: 'Superstore',
    value: 'superstore'
  },
  {
    label: 'Independent Local Grocer',
    value: 'independentLocalGrocer'
  },
  {
    label: 'Independent Health Stores',
    value: 'independentHealthStores'
  },
]

const helpContent = (
  <Typography>
    Why we ask this: So we can share perks with you at your favorite online retailers
  </Typography>
)

const ShoppingStores = ({ control, setValue, clearErrors }) => {
  return (
    <Question 
      title='Where do you do most of your shopping?'
      instructions='Groceries, beauty, household, etc. Select all that apply.' 
      required 
      helpContent={helpContent}
    >
      <CheckboxGroup 
        name='shoppingStores'
        options={options} 
        control={control}
        setValue={setValue}
        clearErrors={clearErrors}
      />
    </Question>
  )
}

export default ShoppingStores

