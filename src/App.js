import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Sub1 from "./routes/Sub1_1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sub1" component={Sub1} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
