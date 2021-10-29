import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
