import { Link } from "react-router-dom";
import Repo from "../components/Repo";
import Pagination from "../components/Pagination";
import "../styles/RepoList.css";

function RepoList() {
  return (
    <section className="repo-list">
      <div className="repo-header">
        <Link to="/">
          <div className="back-btn flex">
            <i className="fa-solid fa-arrow-left"></i>
            <p>Back</p>
          </div>
        </Link>
        <h3>Respositories</h3>
      </div>

      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />

      <Pagination />
    </section>
  );
}

export default RepoList;
