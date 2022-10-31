import "../styles/RepoDescription.css";

function RepoDescription({ description, repo }) {
  
  const displayDescription = (repo) => {
    if (repo.source?.description != undefined) {
      return repo.source.description;
    } else if (description != null) {
      return description;
    } else if (repo.source?.description === undefined || description === null) {
      return "No Description";
    }
  };

  return (
    <div className="repo-desc">
      <h2>Description</h2>
      <p>{displayDescription(repo)}</p>
    </div>
  );
}

export default RepoDescription;
