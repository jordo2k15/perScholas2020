import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DashBoard from './components/layout/DashBoard'
import NavBar from './components/layout/NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
