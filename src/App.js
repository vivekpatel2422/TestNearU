import { Route, Switch } from 'react-router-dom';
//import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './providers/Auth';
import PrivateRoute from './components/PrivateRoute';
import AuthUI from './components/AuthUI/AuthUI'


function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={AuthUI}/>
        <PrivateRoute path="/dash" component={Dashboard} />
      </Switch>
    </AuthProvider>
  );
}

export default App;