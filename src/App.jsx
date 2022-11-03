import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoList from "./pages/RepoList";
import SingleRepo from "./pages/SingleRepo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // https://api.github.com/users/alvinokafor/repos
    // https://api.github.com/users/alvinokafor

    <div className="App">
      <Routes>
        {/* Routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/repositories">
          <Route index element={<RepoList />} />
          <Route path=":id" element={<SingleRepo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
