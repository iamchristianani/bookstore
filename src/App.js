import React from "react";
import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/categories" element={<Categories />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;