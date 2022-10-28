import { Link } from "react-router-dom";
import "../styles/AccountInfo.css";

function AccountInfo({ repos, followers, following }) {
  return (
    <section className="account-info">
      <Link to='/repositories'>
        <div className="repo">
          <p>Repositories</p>
          <p>{repos}</p>
        </div>
      </Link>

      <div className="followers">
        <p>Followers</p>
        <p>{followers}</p>
      </div>

      <div className="following">
        <p>Following</p>
        <p>{following}</p>
      </div>
    </section>
  );
}

export default AccountInfo;
