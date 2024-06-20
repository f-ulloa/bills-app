import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ViewAccounts from './pages/ViewAccounts';
import AccountCharts from './pages/AccountCharts';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-accounts" element={<ViewAccounts />} />
          <Route path="/account-charts" element={<AccountCharts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
