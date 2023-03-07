import Header from "./Header";
import Nav from "./Nav";

import Home from "./Home";
import Works from "./Works";
import Certifications from "./Certifications";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";

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
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
