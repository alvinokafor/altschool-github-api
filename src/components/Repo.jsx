import { Link } from 'react-router-dom'
import "../styles/Repo.css";

function Repo() {
  return (
    <Link to='/repository'>
    <div className="repo-card flex">
      <h5>1</h5>
      <p>africommerce-sass</p>
      <div className="repo-link flex">
        <i className="fa-solid fa-link"></i>
        <p>github.com/alvinokafor/africommerce-saas</p>
      </div>
    </div>
    </Link>
  );
}

export default Repo;
