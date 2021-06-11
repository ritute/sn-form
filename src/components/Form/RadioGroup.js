import { 
  FormControlLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@material-ui/core'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'

import QuestionError from './QuestionError'
import { useFormOptionStyles } from './styles'

const RadioGroup = ({ name, control, options, className }) => {
  const classes = useFormOptionStyles()
  return (
    <Controller 
      name={name}
      control={control}
      rules={{ required: 'Answer required' }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <MuiRadioGroup {...field} className={classNames(classes.group, className)}>
            {options.map((option, index) => (
              <FormControlLabel 
                key={`option-${index}`} 
                value={option.value} 
                control={<Radio className={classes.control} />} 
                label={option.label} 
                className={classNames(classes.formControlLabel, {
                  [classes.error]: error,
                  [classes.selected]: field.value === option.value
                })}
              />
            ))}
          </MuiRadioGroup>
          <QuestionError error={error} />
        </div>
      )}
    />
  )
}

export default RadioGroup
