import BackendVideos from "./components/BackendVideos/BackendVideos";
import Home from "./components/Home/Home";
import IyG from "./components/IyG/IyG";
import Layout from "./components/Layout/Layout";
import FrontVideos from "./components/VIdeosFront/FrontVideos";

function App() {
  return (
    <Layout>
      <Home />
      <FrontVideos />
      <BackendVideos />
      <IyG />
    </Layout>
  );
}

export default App;
