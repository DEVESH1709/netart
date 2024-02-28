// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Contact from './components/Contact';
function App() {

  // media:{mobile:"768px"}
  return (
    // <ThemeProvider theme={theme}></ThemeProvider>
    <div className="App">
   <Navbar></Navbar>
    <Home></Home>
    <Content></Content>
    <Contact></Contact>
    </div>
  );
}

export default App;
