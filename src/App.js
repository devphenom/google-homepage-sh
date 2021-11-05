// compoenents import
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// css
import "./App.scss";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
