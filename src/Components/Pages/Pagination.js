import React from "react";
import { Link } from "react-router-dom";
import "../../styling/pagination.css";
function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((num) => {
          return (
            <li className="page-item">
              <Link
                to="/home"
                onClick={() => paginate(num)}
                className="page-link"
              >
                {num}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
