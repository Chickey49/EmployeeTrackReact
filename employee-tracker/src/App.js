import react from 'react'
import logo from './logo.svg';
import Jumbotron from './components/jumbotron'
import BuildEmpList from './components/empList';
import Search from './components/search';
import 'react-bootstrap'

function App() {
  return (
    <div className="d-flex justify-content-center">
    <Jumbotron/>
    <BuildEmpList/>
    </div>
  )
}

export default App;
