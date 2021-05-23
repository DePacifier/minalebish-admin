import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login.component";
import ForgotPassword from "./pages/forgot-password/forgot-pasword.page";
import PasswordReset from "./components/password-reset/password-reset.component";
import Profile from "./pages/profile/profile.page";
import Dashboard from "./pages/dashboard/dashboard.page";
import Transaction from "./pages/transaction/transaction.page";
import Menu from "./pages/menu/menu.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={PasswordReset} />
        <Route exact path="/:userid/profile" component={Profile} />
        <Route exact path="/:userid/Dashboard" component={Dashboard} />
        <Route exact path="/:userid/Transaction" component={Transaction} />
        <Route exact path="/:userid/Menu" component={Menu} />
        <Route path="*" render={() => <h1>Page Not Found !!!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
