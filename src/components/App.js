import{Route, Switch} from 'react-router-dom';
import '../styles/App.css';

import LandingPage from "../pages/home/LandingPage";
import SignUp from '../pages/user/client/SignUp';
import Login from '../pages/user/Login';
import Layout from "./layout/Layout";
import Company from '../pages/home/CompanyPage';
import Services from '../pages/home/ServicesPage';
import Help from '../pages/home/HelpPage';
import SignUpDriver from '../pages/user/driver/SignUpDriver';

function App() {
    return <Layout>
      <Switch>
        <Route path='/on-the-move'>
          <LandingPage/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/signup-driver'>
          <SignUpDriver/>
        </Route>
        <Route path='/company'>
          <Company/>
        </Route>
        <Route path='/services'>
          <Services/>
        </Route>
        <Route path='/help'>
          <Help/>
        </Route>
      </Switch>
    </Layout>;
}

export default App;
