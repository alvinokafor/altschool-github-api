import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useFetch from "../hooks/useFetch";
import RepoDescription from "../components/RepoDescription";
import RepoMetrics from "../components/RepoMetrics";
import RepoInfo from "../components/RepoInfo";
import HomeLoader from "../components/loader/HomeLoader";
import "../styles/SingleRepo.css";

function SingleRepo() {
  const { id } = useParams();
  const { data: repo } = useFetch(
    "https://api.github.com/repos/alvinokafor/" + id
  );

  return (
    <>
    
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Respository detail"
        />
        <link rel="canonical" href="/respository" />
      </Helmet>

    <section className="single-repo">
      {Object.keys(repo).length > 0 && (
        <>
          <div className="repo-header">
            <Link to="/repositories">
              <div className="back-btn flex">
                <i className="fa-solid fa-arrow-left"></i>
                <p>Back</p>
              </div>
            </Link>
            <h3>{repo.name}</h3>
          </div>

          <section className="single-repo-info">
            <RepoDescription description={repo.description} repo={repo} />
            <RepoMetrics
              repo={repo}
              forks={repo.forks}
              openIssues={repo.open_issues}
              watchers={repo.watchers}
            />

            <RepoInfo
              ownerURL={repo.owner.html_url}
              owner={repo.owner.login}
              repo={repo}
              language={repo.language}
              license={repo.license}
              repoURL={repo.html_url}
            />
          </section>
        </>
      )}

      {Object.keys(repo).length === 0 && (
        <>
          <div className="repo-header">
            <Link to="/repositories">
              <div className="back-btn flex">
                <i className="fa-solid fa-arrow-left"></i>
                <p>Back</p>
              </div>
            </Link>
          </div>
          <section className="single-repo-info">
            <HomeLoader />
            <HomeLoader />
            <HomeLoader />
          </section>
        </>
      )}
    </section>
    </>
  );
}

export default SingleRepo;
