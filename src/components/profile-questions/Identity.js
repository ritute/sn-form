import { makeStyles } from '@material-ui/core'

import Question from './Question'
import RadioGroup from '../form/RadioGroup'

const options = [
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  },
  {
    label: 'I prefer not to say',
    value: 'preferNot'
  },
  {
    label: 'Non-Binary / Genderqueer',
    value: 'nonBinary'
  },
]

const useStyles = makeStyles(theme => ({
  radioGroup: {
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}))

const Identity = ({ control }) => {
  const classes = useStyles()
  return (
    <Question title='I identify as:' required>
      <RadioGroup 
        name='gender'
        options={options} 
        control={control}
        className={classes.radioGroup}
      />
    </Question>
  )
}

export default Identity
