import Question from './Question'
import CheckboxGroup from '../form/CheckboxGroup'

const options = [
  {
    label: 'Organic',
    value: 'organic'
  },
  {
    label: 'GMO-free',
    value: 'gmoFree'
  },
  {
    label: 'All-Natural',
    value: 'allNatural'
  },
  {
    label: 'Dairy-Free',
    value: 'dairyFree'
  },
  {
    label: 'Lactose-Free',
    value: 'lactoseFree'
  },
  {
    label: 'Nut-Free',
    value: 'nutFree'
  },
  {
    label: 'Peanut-Free',
    value: 'peanutFree'
  },
  {
    label: 'Allergy-Friendly',
    value: 'allergyFriendly'
  },
  {
    label: 'Kosher',
    value: 'kosher'
  },
  {
    label: 'Ethically Sourced (Fair Trade)',
    value: 'ethicallySourced'
  },
  {
    label: 'Holistic Remedies',
    value: 'holisticRemedies'
  },
  {
    label: 'Locally Made',
    value: 'locallyMade'
  },
  {
    label: 'Celiac-Friendly',
    value: 'celiacFriendly'
  },
  {
    label: 'Paleo',
    value: 'paleo'
  },
  {
    label: 'Sugar-Free',
    value: 'sugarFree'
  },
]

const ProductQualities = ({ control, setValue, clearErrors }) => {
  return (
    <Question 
      title='I buy products with these qualities due to my sensitivities or lifestyle choices:'
      instructions='Select all that apply.' 
      required 
    >
      <CheckboxGroup 
        name='productQualities'
        options={options} 
        control={control}
        setValue={setValue}
        clearErrors={clearErrors}
      />
    </Question>
  )
}

export default ProductQualities

