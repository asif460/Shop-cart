import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <footer className="app__footer">
        <p>© 2023 ShopEasy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;