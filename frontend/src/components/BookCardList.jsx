import React from "react";
import "./BookCardList.scss"; 

const BookCardList = ({ books, borrowBook, returnBook, message }) => {
  return (
    <div className="book-list-container">
      <h1>Books</h1>
      {message && <div className="message">{message}</div>}
      <div className="card-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <img
                src={book.cover}
                alt={book.title}
                className="book-cover"
                style={{ width: "120px", height: "180px", objectFit: "cover", marginBottom: "10px" }}
                
              />
              <p><strong>Author:</strong> {book.author}</p>
              <p>
                <strong>Available:</strong>{" "}
                <span className={`availability ${book.available ? "" : "not-available"}`}>
                  {book.available ? "Yes" : "No"}
                </span>
                
              </p>
              <button
                onClick={() =>
                  book.available ? borrowBook(book.id) : returnBook(book.id)
                }
                className={book.available ? "borrow" : "return"}
              >
                {book.available ? "Borrow" : "Return"}
              </button>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookCardList;