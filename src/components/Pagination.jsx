import { useEffect } from "react";

const Pagination = ({
  residents,
  pages,
  setPages,
  setCurrentPage,
  currentPage,
}) => {
  useEffect(() => {
    getPagination();
  }, [residents]);

  function getPagination() {
    if (!residents || residents?.length < 8) return;

    setPages(Math.ceil(residents?.length / 8));
  }

  function renderPagesNumbers() {
    const pagesNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pagesNumbers.push(
        <button
          className={`pagination__button ${
            i === currentPage ? "active" : ""
          }`}
          onClick={() => setCurrentPage(i)}
          key={i}
        >
          {i}
        </button>
      );
    }
    return pagesNumbers;
  }

  return (
    <div>
      {pages > 1 && (
        <section className="pagination">
          {renderPagesNumbers()}
        </section>
      )}
    </div>
  );
};

export default Pagination;
