import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scrollbar from './Components/Scrollbar/Scrollbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Scrollbar></Scrollbar>
    </div>
  );
}

export default App;
