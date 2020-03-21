import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b0078',
    },
    secondary: {
      main: '#64b5f6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f7f7',
    },
  },
});

export default theme;
