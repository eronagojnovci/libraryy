package com.library;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;
import java.util.*;
import java.io.*;
import com.fasterxml.jackson.databind.ObjectMapper;
// Import the LibraryInterface if it's in a package, or define it if missing
import com.library.LibraryInterface;

public class LibraryImpl extends UnicastRemoteObject implements LibraryInterface {
    private List<Book> books;
    private final String FILE_PATH = "books.json";

    public LibraryImpl() throws RemoteException {
        loadBooks();
    }

    private void loadBooks() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            File file = new File(FILE_PATH);
            if (file.exists()) {
                books = Arrays.asList(mapper.readValue(file, Book[].class));
                books = new ArrayList<>(books); // Make it mutable
            } else {
                books = new ArrayList<>();
            }
        } catch (Exception e) {
            books = new ArrayList<>();
            System.err.println("Failed to load books: " + e.getMessage());
        }
    }

    private void saveBooks() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.writerWithDefaultPrettyPrinter().writeValue(new File(FILE_PATH), books);
        } catch (Exception e) {
            System.err.println("Failed to save books: " + e.getMessage());
        }
    }

    public List<Book> getAllBooks() {
        return books;
    }

    public String borrowBook(int id) {
        for (Book book : books) {
            if (book.getId() == id && book.isAvailable()) {
                book.setAvailable(false);
                saveBooks();
                return "Book borrowed.";
            }
        }
        return "Not available.";
    }

    public String returnBook(int id) {
        for (Book book : books) {
            if (book.getId() == id && !book.isAvailable()) {
                book.setAvailable(true);
                saveBooks();
                return "Book returned.";
            }
        }
        return "Not found or already available.";
    }
}