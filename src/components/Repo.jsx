import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Repo.css";

function Repo({ num, repoTitle, repoLink, currentPage }) {
  const [cardNum] = useState(currentPage);

  return (
    <Link to={`/repository/${repoTitle}`}>
      <div className="repo-card flex">
        <h5>{(cardNum - 1) * 5 + num + 1}</h5>
        <p id='repoTitle'>{repoTitle}</p>
        <div className="repo-link flex" id='repoURL'>
          <i className="fa-solid fa-link"></i>
          <p>{repoLink}</p>
        </div>
      </div>
    </Link>
  );
}

export default Repo;
