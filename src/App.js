import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import SubCompany from "./routes/SubCompany";
import SubPhilosophy from "./routes/SubPhilosophy";
import SubGlobal from "./routes/SubGlobal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sub1" component={SubCompany} />
          <Route path="/sub2" component={SubPhilosophy} />
          <Route path="/sub3" component={SubGlobal} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
