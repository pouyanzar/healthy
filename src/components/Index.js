import {Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function index() {
  return (
    <div>
      <Register />
      <Login />
      <Link to="/doctors">Doctors</Link>
    </div>
  )
}

export default index;