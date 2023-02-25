import './App.css';
import Matrix from './Components/Matrix'

function App() {
  return (
    <div className="App">
      <h1 style={{
                  fontFamily: "monospace",
                  fontSize: "45px",
                  color: "red"
                }}>30 Days of React</h1>
      <h2 style={{
                  fontFamily: "monospace",
                  fontSize: "30px"
                }}>Number Generator</h2>
      
      <Matrix />
    </div>
  );
}

export default App;
