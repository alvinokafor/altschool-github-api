import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoList from "./pages/RepoList";
import SingleRepo from "./pages/SingleRepo";
import NotFound from "./pages/NotFound";
import useFetch from "./hooks/useFetch";
import { Profiler } from "react";

function App() {
  const { data: profile } = useFetch(
    "https://api.github.com/users/alvinokafor"
  );
  console.log(profile);
  return (
    // https://api.github.com/users/alvinokafor/repos
    // https://api.github.com/users/alvinokafor

    <div className="App">
      <Routes>
        <Route path="/" element={<Home profile={profile} />} />
        <Route path="/repositories" element={<RepoList />} />
        <Route path="/repository" element={<SingleRepo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
