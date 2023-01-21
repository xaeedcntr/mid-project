
import './App.css';
import History from './History';
import Home from './Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
    
    
      
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />

      </Routes>
    </BrowserRouter>




  
    


  );
}


export default App;
