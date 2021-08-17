import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import colors from './common/colors';
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(249, 236, 230)'
    },
    secondary: {
      main: '#143975',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", Roboto, PT Sans, Arial, Helvetica, sans-serif',
  },
});

export default theme;
