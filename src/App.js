import './App.css';
import NavbarMenu from './modules/home/navbar';
import theme from './theme';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import WhyUsHome from './modules/whyus/whyusHome';
import FooterHome from './modules/footer/footerHome';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavbarMenu />
      <WhyUsHome/>
      <FooterHome />
    </MuiThemeProvider>
  );
}

export default App;
