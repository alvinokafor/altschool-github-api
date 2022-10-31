import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Repo from "../components/Repo";
import Pagination from "../components/Pagination";
import RepoLoader from "../components/loader/RepoLoader";
import "../styles/RepoList.css";

function RepoList() {
  const { data: repolist } = useFetch(
    "https://api.github.com/users/alvinokafor/repos"
  );
  
  //sets state for the current page and the number of repos per page
  const [currentPage, setCurrentPage] = useState(1)
  const [reposPerPage] = useState(5)
  
  //gets the index of the last page
  const indexOfLastPage = currentPage * reposPerPage
  //gets the index of the second page
  const indexOfFirstPage = indexOfLastPage - reposPerPage
  //gets the current page by slicing the repolist by the index of the first and last page
  const current = repolist.slice(indexOfFirstPage, indexOfLastPage)

  //switches between pages and updates the current page state
  const paginate = (btnNum) => {
    setCurrentPage(btnNum)
  }

  //handles the previous button by decrementing the current page 
  const prev = () => {
    setCurrentPage(currentPage - 1)
  }

  //handles the next button by incrementing the current page
  const next = () => {
    setCurrentPage(currentPage + 1)
  }



  return (
    <section className="repo-list">
      <div className="repo-header">
        <Link to="/">
          <div className="back-btn flex">
            <i className="fa-solid fa-arrow-left"></i>
            <p>Back</p>
          </div>
        </Link>
        <h3>Respositories</h3>
      </div>

      {/* checks if data coming from the api is populatd with info or available */}
      {repolist.length > 0 &&
        current.map((repo, index) => (
          <Repo key={repo.id} num={index} repoTitle={repo.name} repoLink={repo.html_url} />
        ))}

      {/* if data isn't available, then display a loading state */}
      {repolist.length === 0 &&
        [1, 2, 3, 4, 5].map((n) => <RepoLoader key={n} />)}

      <Pagination 
        paginate={paginate}
        totalRepos={repolist.length}
        reposPerPage={reposPerPage}
        currentPage={currentPage}
        prev={prev}
        next={next}
      />
    </section>
  );
}

export default RepoList;
