import "../styles/RepoMetrics.css";

function RepoMetrics({ forks, openIssues, watchers, repo }) {
  return (
    <section className="repo-metrics">
      <div className="open-issues">
        <p>Open Issues</p>
        <p>
          {repo.source?.open_issues === undefined
            ? openIssues
            : repo.source.open_issues}
        </p>
      </div>

      <div className="forks">
        <p>Forks</p>
        <p>{repo.source?.forks === undefined ? forks : repo.source.forks}</p>
      </div>

      <div className="watchers">
        <p>Watchers</p>
        <p>
          {repo.source?.watchers === undefined
            ? watchers
            : repo.source.watchers}
        </p>
      </div>
    </section>
  );
}

export default RepoMetrics;
