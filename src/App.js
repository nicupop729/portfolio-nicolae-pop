import './App.scss';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </>
);

export default App;
