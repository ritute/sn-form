const muiTheme = {
  palette: {
    primary: {
      main: '#08ADCD',
    },
    secondary: {
      main: '#E42748',
    },
    text: {
      primary: '#5D5D5D',
    },
    background: {
      default: '#F7F7F7',
      paper: '#FFF',
      gradient: 'linear-gradient(348.5deg, rgb(209, 35, 157) 0%, rgb(228, 39, 72) 100%)',
      gradientHover: 'linear-gradient(346.52deg, rgb(208, 19, 52) 0%, rgb(189, 15, 137) 100%)',
    },
    error: {
      main: '#E42748',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Karla', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
}

export default muiTheme
