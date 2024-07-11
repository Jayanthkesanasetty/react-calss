 import logo from './logo.svg';
import './App.css';
// import './components/button/table/table.css'

// import But from './components/button/button';
// import Main,{Head2,Head3} from './components/button/heading';
import Table from './components/table/table';
import Card ,{Card2} from './components/cards/cards';
import IndiaIpl from './10-7-24/iplteam';
import Ipl from './10-7-24/ipl';
import Main from './components/button/heading';
function App() {
  return ( 
    <div className="App">
      {/* <h1>TABLE</h1>
      <Table />
      <h1>CARDS</h1>
      <Card />
      <Card2 /> */}
      <IndiaIpl />
      {/* <IplTeam />
      <Ipl /> */}
    {/* <Ipl /> */}
    </div>
  );  
}

export default App;
