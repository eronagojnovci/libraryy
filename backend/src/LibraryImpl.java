import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;
import java.util.*;
import java.io.*;

public class LibraryImpl extends UnicastRemoteObject implements LibraryInterface {
    private List<Book> books;

    public LibraryImpl() throws RemoteException {
        loadBooks();
    }

    private void loadBooks() {
        // Lexo JSON dhe inicializo listën
    }

    public List<Book> getAllBooks() {
        return books;
    }

    public String borrowBook(int id) {
        // ndrysho `available = false`
    }

    public String returnBook(int id) {
        // ndrysho `available = true`
    }
}
