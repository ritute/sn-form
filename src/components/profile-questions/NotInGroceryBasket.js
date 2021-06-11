import { makeStyles, Typography } from '@material-ui/core'

import Question from './Question'
import CheckboxGroup from '../form/CheckboxGroup'

const options = [
  {
    label: 'Any animal products',
    value: 'animalProducts'
  },
  {
    label: 'Meat or Poultry',
    value: 'meatOrPoultry'
  },
  {
    label: 'Seafood',
    value: 'seafood'
  },
  {
    label: 'Dairy products',
    value: 'dairy'
  },
  {
    label: 'Gluten containing products',
    value: 'gluten'
  },
  {
    label: 'Wheat containing products',
    value: 'wheat'
  },
  {
    label: 'Nut containing products',
    value: 'nuts'
  },
  {
    label: 'Soy containing products',
    value: 'soy'
  },
]

const useStyles = makeStyles(theme => ({
  bold: {
    color: theme.palette.secondary.main,
  },
}))

const helpContent = (
  <Typography>
    Why we ask this: We want to invite you to try products that suit you and your household.
  </Typography>
)

const Title = () => {
  const classes = useStyles()
  return (
    <Typography>In my grocery basket you will <b className={classes.bold}>not</b> find:</Typography>
  )
}

const NotInGroceryBasket = ({ control, setValue, clearErrors }) => {
  return (
    <Question 
      title={<Title />}
      instructions='Select all that apply.' 
      required 
      helpContent={helpContent}
    >
      <CheckboxGroup 
        name='notInGroceryBasket'
        options={options} 
        control={control}
        setValue={setValue}
        clearErrors={clearErrors}
      />
    </Question>
  )
}

export default NotInGroceryBasket

