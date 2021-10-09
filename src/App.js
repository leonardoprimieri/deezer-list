import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Sidebar } from "./components/Sidebar";
import store from "./store";
import GlobalStyle, { AppContainer } from "./global/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </AppContainer>
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
