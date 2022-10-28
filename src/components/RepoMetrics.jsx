import '../styles/RepoMetrics.css'

function RepoMetrics() {
  return (
    <section className="repo-metrics">
   
        <div className="open-issues">
          <p>Open Issues</p>
          <p>24</p>
        </div>

      <div className="forks">
        <p>Forks</p>
        <p>5</p>
      </div>

      <div className="watchers">
        <p>Watchers</p>
        <p>8</p>
      </div>
    </section>
  );
}

export default RepoMetrics;
