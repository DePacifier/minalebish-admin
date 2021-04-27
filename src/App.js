import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login.component";
import Dashboard from "./dashboard/dashboard.page";
import Transaction from "./transaction/transaction.page";

function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/:userid/Dashboard" component={Dashboard} />
        <Route exact path="/:userid/Transaction" component={Transaction} />
        <Route path="*" render={() => <h1>Page Not Found !!!</h1>} />
      </switch>
    </div>
  );
}

export default App;
