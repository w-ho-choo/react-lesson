import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

//#7.3 Movie App part One 부터 다시 듣기