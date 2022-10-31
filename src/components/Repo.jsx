import { Link } from 'react-router-dom'
import "../styles/Repo.css";

function Repo({ num, repoTitle, repoLink }) {
  return (
    <Link to={`/repository/${repoTitle}`}>
    <div className="repo-card flex">
      <h5>{num + 1}</h5>
      <p>{repoTitle}</p>
      <div className="repo-link flex">
        <i className="fa-solid fa-link"></i>
        <p>{repoLink}</p>
      </div>
    </div>
    </Link>
  );
}

export default Repo;
