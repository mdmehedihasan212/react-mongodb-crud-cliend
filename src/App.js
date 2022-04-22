import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageUser from './components/ManageUser/ManageUser';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/adduser' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manage' element={<ManageUser></ManageUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
