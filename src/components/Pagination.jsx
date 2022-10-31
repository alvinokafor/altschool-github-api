import "../styles/Pagination.css";

function Pagination({ reposPerPage, totalRepos, currentPage, paginate, prev, next }) {
  const pageNumbers = [];

  //gets the maximum amount of buttons to be displayed
  const buttonLimit = Math.ceil(totalRepos / reposPerPage);

  //pushes a number sequntially to the pageNumbers array for each instance i is less the btn limit
  for (let i = 1; i <= buttonLimit; i++) {
    pageNumbers.push(i);
  }

  //checks if the previous button should be disabled
  const checkPrevDisabled = (currentPage) => {
    if(currentPage <= 1) {
        return true;
    }
  }

  //checks if the next button should be disabled
  const checkNextDisabled = (currentPage) => {
    if(currentPage >= 5) {
        return true;
    }
  }

  return (
    <div className="pagination">
      <button 
        disabled={checkPrevDisabled(currentPage)}
        id={checkPrevDisabled(currentPage) ? 'btn-disabled' : 'control'}
        onClick={() => prev()}  //fires the previous button function 
      >Previous</button>

      {pageNumbers.map((btnNum) => (
        <button 
        key={btnNum} 
        onClick={() => paginate(btnNum)} //fires the paginate function
        id={currentPage === btnNum ? 'btn-active' : null}
        >    
          {btnNum}
        </button>
      ))}

      <button 
        disabled={checkNextDisabled(currentPage)}
        id={checkNextDisabled(currentPage) ? 'btn-disabled' : 'control'}
        onClick={() => next()} //fires the next button function handler
      >Next</button>
    </div>
  );
}

export default Pagination;
