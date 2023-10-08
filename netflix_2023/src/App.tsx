import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        {/* /는 가장 마지막에 와야함 다른 라우터주소도 /로 시작하기 때문 */}
        <Route path="/"> 
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;