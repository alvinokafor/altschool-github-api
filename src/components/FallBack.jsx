import React from "react";
import { Link } from "react-router-dom";
import "../styles/ErrorBoundary.css";

export default function FallBack() {
  return (
    <section className="error-boundary">
      <div>
        <h2>Oops!</h2>
        <p>Something went wrong</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
}
