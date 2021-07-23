import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shaders from "./views/Shaders";
import Shader from "./views/Shader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Shaders} />
        <Route path="/shaders/:id" component={Shader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
