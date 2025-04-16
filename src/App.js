import Layout from './components/Layout';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
