import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/PAGE2" element={<Page2 />} />
          <Route path="/PAGE3" element={<Page3 />} />
          <Route path="/PAGE4" element={<Page4 />} />
          <Route path="/PAGE5" element={<Page5 />} />
          <Route path="/PAGE6" element={<Page6 />} />
          <Route path="/PAGE7" element={<Page7 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
