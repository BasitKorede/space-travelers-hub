import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<Rockets />}
        />
      </Routes>
    </div>
  );
}

export default App;
