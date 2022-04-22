import './App.scss';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </>
);

export default App;
