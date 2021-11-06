import { BrowserRouter, Switch, Route } from "react-router-dom";

// compoenents import
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// css
import "./App.scss";

const Error404 = () => <div>Error 404</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div id="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
