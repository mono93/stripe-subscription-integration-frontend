import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import { AboutProject, Notification, Payment, ProductList, Transaction, } from './views';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Routes>
          <Route path='/' element={<AboutProject />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/transactions' element={<Transaction />} />
          <Route path='/about' element={<AboutProject />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
