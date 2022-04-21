import './App.scss';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </>
);

export default App;
