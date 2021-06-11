import { forwardRef } from 'react'
import { 
  makeStyles,
  TextField,
  Grid,
} from '@material-ui/core'
import { Controller } from 'react-hook-form'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    font: '1rem',
    lineHeight: '1.25rem',
    color: '#333',
  },
  label: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    paddingBottom: 2,
    display: 'flex',
    color: theme.palette.text.primary,
  },
  dateField: {
    width: 61,
    '& .MuiOutlinedInput-root': {
      background: '#FBFBFB',
      '& fieldset': {
        borderColor: '#CCC',
        borderRadius: 4,
      },
      '&:hover fieldset': {
        borderColor: '#CCC',
      },
      '&.Mui-focused fieldset': {
        border: `1px solid ${theme.palette.primary.main}`
      }
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 16px',
    },
  },
  large: {
    width: 77,
  },
  error: {
    '& .MuiOutlinedInput-root': {
      '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
        borderColor: theme.palette.error.main,
      },
    }
  },
  dateFieldWrapper: {
    flexGrow: 0,
  },
  [theme.breakpoints.only('xs')]: {
    dateFieldWrapper: {
      flexGrow: 1,
    },
    dateField: {
      width: '100%',
    },
    large: {
      width: '100%',
    },
  }
}))

const DateTextField = forwardRef(({ error, large, ...rest }, ref) => {
  const classes = useStyles()
  return (
    <TextField 
      ref={ref}
      variant='outlined' 
      className={classNames(classes.dateField, {
        [classes.large]: large,
        [classes.error]: error,
      })}
      autoComplete='off'
      {...rest}
    />
  )
})

const DateField = ({ control, label, name, required, rules, placeholder, large }) => {
  const classes = useStyles()
  const { pattern, ...inputProps } = rules
  return (
    <Grid item xs className={classes.dateFieldWrapper}>
      <label className={classes.label}>{label}</label>
      <Controller 
        name={name}
        control={control}
        rules={{ 
          required,
          ...rules
        }}
        render={({ field, fieldState: { error } }) => (
          <DateTextField 
            {...field}
            placeholder={placeholder}
            inputProps={{ ...inputProps }} 
            large={large}
            error={error}
          />
        )}
      />
    </Grid>
  )
}

const monthRules = {
  min: 1,
  max: 12,
  maxLength: 2,
  pattern: /[0-9]{2}/,
}

const dayRules = {
  min: 1,
  max: 31,
  maxLength: 2,
  pattern: /[0-9]{2}/,
}

const yearRules = {
  min: 1900,
  maxLength: 4,
  pattern: /[0-9]{4}/,
}

const Date = ({ control, fieldName, required, month, day, year }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} className={classes.root}>
      {month && (
        <DateField 
          label='Month'
          name={`${fieldName}.month`}
          rules={monthRules}
          control={control}
          placeholder='MM'
          required={required}
        />
      )}
      {day && (
        <DateField 
          label='Day'
          name={`${fieldName}.day`}
          rules={dayRules}
          control={control}
          placeholder='DD'
          required={required}
        />
      )}
      {year && (
        <DateField 
          label='Year'
          name={`${fieldName}.year`}
          rules={yearRules}
          control={control}
          placeholder='YYYY'
          required={required}
          large
        />
      )}
    </Grid>
  )
}

export default Date
