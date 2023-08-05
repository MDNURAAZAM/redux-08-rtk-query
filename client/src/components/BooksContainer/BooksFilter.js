import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../features/filter/filterSlice";

const BooksFilter = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleFilter = (filterValue) => {
    dispatch(addFilter(filterValue));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${filter === "All" && "active-filter"}`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            filter === "Featured" && "active-filter"
          }`}
          onClick={() => handleFilter("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BooksFilter;
