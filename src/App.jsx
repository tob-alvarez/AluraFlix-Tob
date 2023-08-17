import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NuevoVideo from "./components/NuevoVideo/NuevoVideo";
import NuevaCategoria from "./components/NuevaCategoria/NuevaCategoria";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/nuevo-video" element={<NuevoVideo />}></Route>
          <Route path="/nueva-categoria" element={<NuevaCategoria />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
