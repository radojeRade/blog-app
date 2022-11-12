import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>  
          <Link to="/posts">Posts</Link><br></br>
         
     </nav>
    </div>
  );
}

export default App;
