
import {Routes, Route} from 'react-router-dom'
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import "./style/style.scss"
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
