import React, { useEffect, useState } from "react";
import BookCardList from "../components/BookCardList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/books");
      const data = await res.json();
      setBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setMessage("Failed to fetch books.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Borrow a book
  const borrowBook = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/books/borrow/${id}`, {
        method: "POST",
      });
      const msg = await res.text();
      setMessage(msg);
      fetchBooks();
    } catch (error) {
      console.error("Error borrowing book:", error);
      setMessage("Failed to borrow book.");
    }
  };

  // Return a book
  const returnBook = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/books/return/${id}`, {
        method: "POST",
      });
      const msg = await res.text();
      setMessage(msg);
      fetchBooks();
    } catch (error) {
      console.error("Error returning book:", error);
      setMessage("Failed to return book.");
    }
  };

  return (
    <BookCardList
      books={books}
      borrowBook={borrowBook}
      returnBook={returnBook}
      message={message}
    />
  );
};

export default Books;
