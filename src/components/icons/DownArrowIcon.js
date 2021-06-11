import SvgIcon from '@material-ui/core/SvgIcon'

import { ReactComponent as DownArrow } from 'images/arrow-down.svg'

const DownArrowIcon = (props) => {
  return (
    <SvgIcon component={DownArrow} viewBox='0 0 14 8' {...props} />
  )
}

export default DownArrowIcon
