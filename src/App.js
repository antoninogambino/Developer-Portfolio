import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const App = () => {
  return (
    <Router>
      <header>
        <div className="logo">AG.</div> {/* Added AG. logo */}
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <FontAwesomeIcon icon={faBox} /> Projects
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon icon={faPaperPlane} /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
