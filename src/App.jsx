import Home from "./Pages/Home";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;
