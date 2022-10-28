import "../styles/RepoInfo.css";

function RepoInfo() {
  return (
    <section className="repo-info">
      <p><span>Owner:</span> Alvin Okafor</p>
      <p><span>Languages:</span> JavaScript</p>
      <p><span>Licence:</span> MIT Licence</p>
      <div className="repo-link flex repo-info-div">
        <i className="fa-solid fa-link"></i>
        <p>github.com/alvinokafor/africommerce-saas</p>
      </div>
    </section>
  );
}

export default RepoInfo;
