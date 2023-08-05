import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["books", "book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (bookId) => `/books/${bookId}`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "books",
        { type: "book", id: arg.bookId },
      ],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = apiSlice;
