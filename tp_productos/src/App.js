import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home.js'

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
