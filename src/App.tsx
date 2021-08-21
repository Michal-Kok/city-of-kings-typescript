import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './assets/style/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/style/GlobalStyle';
import MainTemplate from './templates/MainTemplate';
import LandingPage from './pages/LandingPage/LandingPage';
import Attractions from './pages/Attractions/Attractions';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/atrakcje" component={Attractions} />
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
