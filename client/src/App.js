import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./components/Nav";
import './App.css';

function App() {
  return(
    <Router>
      <div>
        <Nav />
        <switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
