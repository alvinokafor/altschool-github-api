import "../styles/RepoInfo.css";

function RepoInfo({ owner, ownerURL, license, language, repoURL, repo }) {
  return (
    <section className="repo-info">
      <p>
        {/* checks if there is a parent repo and sources the data from either it or the users repo */}
        <a
          href={
            repo.source?.owner.html_url === undefined
              ? ownerURL
              : repo.source.owner.html_url
          }
        >
          <span>Owner:</span>{" "}
          {repo.source?.owner.login === undefined
            ? `@${owner}`
            : `@${repo.source.owner.login}`}
        </a>
      </p>
      <p>
        <span>Language:</span>{" "}
        {repo.source?.language === undefined ? language : repo.source.language}
      </p>
      <p className={license === null ? "not-available" : null}>
        <span>Licence:</span> {license === null ? "No Licence" : license.name}
      </p>
      <div className="repo-link flex repo-info-div">
        <i className="fa-solid fa-link"></i>
        <a id='infoURL' href={repoURL}>{repoURL}</a>
      </div>
    </section>
  );
}

export default RepoInfo;
