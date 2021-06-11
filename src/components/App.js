import {
  CssBaseline,
  MuiThemeProvider,
  // Open issue: https://github.com/mui-org/material-ui/issues/13394
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core'
import CustomMuiTheme from '../muiTheme'
import Navbar from './Navbar'
import ProfileQuestions from './profile-questions/ProfileQuestions'

const theme = createMuiTheme(CustomMuiTheme)

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <ProfileQuestions />
    </MuiThemeProvider>
  )
}

export default App
