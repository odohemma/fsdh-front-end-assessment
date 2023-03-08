import Header from "./Header";
import Nav from "./Nav";

import Home from "./Home";
import Works from "./Works";
import Certifications from "./Certifications";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header title="Emmanuel Odoh" />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/works">
          <Works />
        </Route>
        <Route>
          <Certifications exact path="/certifications" />
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
