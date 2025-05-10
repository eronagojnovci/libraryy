package com.library;

import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.util.*;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class LibraryController {
    private final String FILE_PATH = "books.json";
    private final ObjectMapper mapper = new ObjectMapper();

    private List<Book> readBooks() throws Exception {
        return Arrays.asList(mapper.readValue(new File(FILE_PATH), Book[].class));
    }

    private void writeBooks(List<Book> books) throws Exception {
        mapper.writerWithDefaultPrettyPrinter().writeValue(new File(FILE_PATH), books);
    }

    @GetMapping
    public List<Book> getBooks() throws Exception {
        return readBooks();
    }

    @PostMapping("/borrow/{id}")
    public String borrowBook(@PathVariable int id) throws Exception {
        List<Book> books = readBooks();
        for (Book book : books) {
            if (book.getId() == id && book.isAvailable()) {
                book.setAvailable(false);
                writeBooks(books);
                return "Book borrowed.";
            }
        }
        return "Not available.";
    }

    @PostMapping("/return/{id}")
    public String returnBook(@PathVariable int id) throws Exception {
        List<Book> books = readBooks();
        for (Book book : books) {
            if (book.getId() == id && !book.isAvailable()) {
                book.setAvailable(true);
                writeBooks(books);
                return "Book returned.";
            }
        }
        return "Not found or already available.";
    }
}