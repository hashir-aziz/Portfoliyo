import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import More from './Components/More'
import Projects from './Components/Projects'
import Stack from './Components/Stack';
function App() {
  return (
  <div className='mx-auto'>
    <Nav/>
    <Intro/>
    <More/>
    <Projects/>
    <Stack/>
  </div>  
  

   
  
  );
}

export default App;
