import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import { Box } from '@mui/material';
import Academics from './Academics';

function App() {
  return (
    <div className='body'>
      <Intro />
      <Academics />
    </div>
  );
}

export default App;
