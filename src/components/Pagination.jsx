import React from "react";

function Pagination({ currentPage, setCurrentPage, totalPokemon }) {
  const totalPages = Math.ceil(totalPokemon / 20);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="font-bold text-lg">{currentPage}</span>
      <span className="font-bold text-lg"> of </span>
      <span className="font-bold text-lg">{totalPages}</span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
