 import logo from './logo.svg';
import './App.css';
// import './components/button/table/table.css'

// import But from './components/button/button';
// import Main,{Head2,Head3} from './components/button/heading';
import Table from './components/table/table';
import Card ,{Card2} from './components/cards/cards';
function App() {
  return ( 
    <div className="App">
      {/* <h1>TABLE</h1>
      <Table />
      <h1>CARDS</h1>
      <Card /> */}
      <Card2 />
    </div>
  );  
}

export default App;
