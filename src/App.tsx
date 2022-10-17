import { FC } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Transactions from './components/transactions/Transactions';

const App: FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-stone-50 w-full flex flex-col items-center min-h-screen">
      <Navbar />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
