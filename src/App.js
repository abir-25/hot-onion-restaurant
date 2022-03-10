import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          {/* <Banner></Banner> */}
          <Route exact path="/">
            <Banner></Banner>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
