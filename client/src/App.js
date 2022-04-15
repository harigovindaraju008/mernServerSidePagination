import './App.css';
import Users from './containers/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Users/>
    </div>
  );
}

export default App;
