import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ name, username, bio }) {
  return (
    <header>
      <div className="user-bio">
        <h2>{name}</h2>
        <p>@{username}</p>
        <p>{bio}</p>
      </div>

      <div>
        <Link to='/repositories'>
          <button className="view-repo">View Repositories</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
