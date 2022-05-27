import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <h1 className='text-light' style={{margin: '0px',background: 'steelblue',padding: '9px' }}>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
