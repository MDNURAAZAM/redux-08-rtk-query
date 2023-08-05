import React from "react";
import BookListItem from "./BookListItem";
import { useGetBooksQuery } from "../../features/api/apiSlice";

const BookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  if (isError) {
    return <div>Error occurred</div>;
  }
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* <!-- Card 1 --> */}
      {books?.length > 0 &&
        books.map((book) => (
          <BookListItem key={book.id} book={book}></BookListItem>
        ))}
    </div>
  );
};

export default BookList;
