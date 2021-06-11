import { useForm } from 'react-hook-form'
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core'

import SubmitButton from '../form/SubmitButton'
import Instructions from './Instructions'
import Identity from './Identity'
import Birthday from './Birthday'
import ShopFor from './ShopFor'
import ExpectingBaby from './ExpectingBaby'
import Experience from './Experience'
import ProductQualities from './ProductQualities'
import NotInGroceryBasket from './NotInGroceryBasket'
import ShoppingStores from './ShoppingStores'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
  },
  question: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  submit: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 216,
  },
}))

const ProfileQuestionsForm = () => {
  const classes = useStyles()

  const { handleSubmit, watch, control, formState: { errors }, setValue, clearErrors } = useForm({
    defaultValues: {
      gender: '',
      birthday: {
        month: '',
        day: '',
        year: ''
      },
      shopFor: [],
      expectingBaby: '',
      babyDueDate: {
        month: '',
        year: ''
      },
      experience: [],
      productQualities: [],
      notInGroceryBasket: [],
      shoppingStores: [],
    }
  })
  
  const onSubmit = (data) => console.log(data)

  return (
    <main>
      <Container fixed className={classes.root}>
        <Grid container direction='column' alignItems='stretch'>
          <Grid item><Instructions /></Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item className={classes.question}>
              <Identity control={control} />
            </Grid>
            <Grid item className={classes.question}>
              <Birthday control={control} errors={errors.birthday} />
            </Grid>
            <Grid item className={classes.question}>
              <ShopFor control={control} setValue={setValue} clearErrors={clearErrors} />
            </Grid>
            <Grid item className={classes.question}>
              <ExpectingBaby 
                control={control} 
                gender={watch('gender')} 
                isExpecting={watch('expectingBaby')} 
                errors={errors.expectingBaby}
              />
            </Grid>
            <Grid item className={classes.question}>
              <Experience control={control} setValue={setValue} clearErrors={clearErrors} />
            </Grid>
            <Grid item className={classes.question}>
              <ProductQualities control={control} setValue={setValue} clearErrors={clearErrors} />
            </Grid>
            <Grid item className={classes.question}>
              <NotInGroceryBasket control={control} setValue={setValue} clearErrors={clearErrors} />
            </Grid>
            <Grid item className={classes.question}>
              <ShoppingStores control={control} setValue={setValue} clearErrors={clearErrors} />
            </Grid>
            <Grid item className={classes.submit}>
              <SubmitButton />
            </Grid>
          </form>
        </Grid>
      </Container>
    </main>
  )
}

export default ProfileQuestionsForm
