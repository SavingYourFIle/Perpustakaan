import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './Components/Sidebar'

import Menu_Utama from './Pages/Menu_Utama'
import Peminjam from './Pages/Peminjam'
import Pengunjung from './Pages/Pengunjung'
import Transaksi from './Pages/Transaksi'

function App() {
  return (
    <>

      <Router>
        <div className='container'>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Menu_Utama/>} />
            <Route path='/peminjam' element={<Peminjam/>} />
            <Route path='/pengunjung' element={<Pengunjung/>} />
            <Route path='/transaksi' element={<Transaksi/>} /> 
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
