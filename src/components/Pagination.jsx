import "./css/Pagination.css"

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button
          id="space_btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      )}

      <button className="active">
        {currentPage}
      </button>

      {currentPage !== Math.ceil(totalPosts / postPerPage) && (
        <button
          id="space_btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;