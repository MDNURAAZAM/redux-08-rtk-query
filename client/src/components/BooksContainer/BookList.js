import React from "react";
import BookListItem from "./BookListItem";

const BookList = () => {
  return (
    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* <!-- Card 1 --> */}
      <BookListItem />
      <BookListItem />
      <BookListItem />
    </div>
  );
};

export default BookList;
