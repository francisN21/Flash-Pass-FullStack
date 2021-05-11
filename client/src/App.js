import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import FormAuthentication from "./Components/Forms/FormAuthenticate";
import { useLocalStorage } from "./Components/LocalStorage/useLocalStorage";
import ThemeContext from "./utils/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./settings";

function App() {
  // const getData = async () => {
  //   try {
  //     axios.get("/api/test").then((res) => console.log(res));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  // getData();

  // }, []);
  // const [state, setstate] = useState(initialState);
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/login" component={FormAuthentication} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
