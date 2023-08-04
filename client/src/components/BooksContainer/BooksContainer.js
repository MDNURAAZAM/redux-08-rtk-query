import React from "react";
import BooksFilter from "./BooksFilter";
import BookList from "./BookList";

const BooksContainer = () => {
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <BooksFilter />
        <BookList />
      </div>
    </main>
  );
};

export default BooksContainer;
