import { Link } from "react-router-dom";
import RepoDescription from "../components/RepoDescription";
import RepoMetrics from "../components/RepoMetrics";
import RepoInfo from "../components/RepoInfo";
import "../styles/SingleRepo.css";

function SingleRepo() {
  return (
    <section className="single-repo">
      <div className="repo-header">
        <Link to="/repositories">
          <div className="back-btn flex">
            <i className="fa-solid fa-arrow-left"></i>
            <p>Back</p>
          </div>
        </Link>
        <h3>africommerce sass</h3>
      </div>

      <section className="single-repo-info">
        <RepoDescription />
        <RepoMetrics />
        <RepoInfo />
      </section>
    </section>
  );
}

export default SingleRepo;
