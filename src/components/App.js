import{Route, Switch} from 'react-router-dom';
import '../styles/App.css';

import LandingPage from "../pages/home/LandingPage";
import ClientDash from '../pages/user/client/ClientDash';
import SignUp from '../pages/user/client/SignUp';
import Login from '../pages/user/Login';
import Layout from "./layout/Layout";
import Company from '../pages/home/CompanyPage';
import Services from '../pages/home/ServicesPage';
import Help from '../pages/home/HelpPage';
import SignUpDriver from '../pages/user/driver/SignUpDriver';
import { AuthProvider } from '../context/AuthContext';

function App() {
    return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route path='/client-dashboard' component={ClientDash} />
          <Route path='/on-the-move' component={LandingPage} />
          <Route path='/login' component={Login} /> 
          <Route path='/signup' component={SignUp} />
          <Route path='/signup-driver' component={SignUpDriver} />
          <Route path='/company' component={Company} />
          <Route path='/services' component={Services}/>
          <Route path='/help' component={Help} />
        </Switch>
      </Layout>
    </AuthProvider>
    );
}

export default App;
