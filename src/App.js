import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Slider from './Components/Slider'


function App() {
  return (
    <div className="App">
        <Router>
                <Route path="/" component={Slider}/>
        </Router>

    </div>
  );
}

export default App;
