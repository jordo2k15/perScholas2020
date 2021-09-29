import './App.css';
import FetchData from './components/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
    <NavBar />
     <div> <FetchData /></div>
    </div>
  );
}

export default App;
