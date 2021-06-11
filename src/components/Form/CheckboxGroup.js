import { 
  FormGroup,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'

import QuestionError from './QuestionError'
import { useFormOptionStyles } from './styles'

// https://stackoverflow.com/questions/61475234/material-ui-react-form-hook-multiple-checkboxes-default-selected
const CheckboxGroup = ({ name, options, control, setValue, clearErrors, className }) => {
  const classes = useFormOptionStyles()

  const handleChange = (target, field) => {
    clearErrors()
    // Toggle checkbox
    if (field.value.includes(target.value)) {
      // Remove from values
      setValue(field.name, field.value.filter(i => i !== target.value))
    } else {
      // Add it to values
      setValue(field.name, [...field.value, target.value])
    }
  }
  return (
    <Controller 
      name={name}
      control={control}
      rules={{ required: 'Answer required' }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormGroup {...field} onChange={({ target }) => handleChange(target, field)} className={classNames(classes.group, className)}>
            {options.map((option, index) => (
              <FormControlLabel 
                key={`option-${index}`} 
                value={option.value} 
                control={<Checkbox className={classes.control} />} 
                label={option.label} 
                className={classNames(classes.formControlLabel, {
                  [classes.error]: error,
                  [classes.selected]: field.value.includes(option.value)
                })}
              />
            ))}
          </FormGroup>
          <QuestionError error={error} />
        </div>
      )}
    />
  )
}

export default CheckboxGroup
