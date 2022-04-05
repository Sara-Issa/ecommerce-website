import Nav from "./components/nav";
import Footer from "./components/footer";
import Register from "./components/signup/signup";
import Login from "./components/login/login";
import About from "./components/guids/about";
import Privecy from "./components/guids/privecy";
import Terms from "./components/guids/terms";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" exact component={Register} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/privecy" exact component={Privecy} />
          <Route path="/terms" exact component={Terms} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
