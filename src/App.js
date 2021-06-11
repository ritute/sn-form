import {
  CssBaseline,
  Container,
  createMuiTheme,
  MuiThemeProvider,
  Grid,
} from '@material-ui/core'
import CustomMuiTheme from "./muiTheme";
import Identity from "./Identity";
import Birthday from './Birthday'
import ShopFor from './ShopFor'

const theme = createMuiTheme(CustomMuiTheme);

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Container>
          <Grid container direction="column" spacing={2}>
            <Grid item><Identity /></Grid>
            <Grid item><Birthday /></Grid>
            <Grid item><ShopFor /></Grid>
          </Grid>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}
