import{Route, Switch} from 'react-router-dom';

import LandingPage from "./pages/home/LandingPage";
import SignUp from './pages/user/client/SignUp';
import Login from './pages/user/Login';
import Layout from "./components/layout/Layout";
import './styles/App.css';
import Company from './pages/home/CompanyPage';
import Services from './pages/home/ServicesPage';
import Help from './pages/home/HelpPage';

function App() {
    return <Layout>
      <Switch>
        <Route path='/' exact>
          <LandingPage/>
        </Route>
        <Route path='/Login'>
          <Login/>
        </Route>
        <Route path='/SignUp'>
          <SignUp/>
        </Route>
        <Route path='/Company'>
          <Company/>
        </Route>
        <Route path='/Services'>
          <Services/>
        </Route>
        <Route path='/Help'>
          <Help/>
        </Route>
      </Switch>
    </Layout>;
}

export default App;
