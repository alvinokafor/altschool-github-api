import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="error-content">
        <h1 id="error-title">404</h1>
        <div className="error-info">
          <h2>Page not found</h2>
          <p>
            This Page doesn`t exist or was removed! We suggest you go back to the home page.
          </p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
