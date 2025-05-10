import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;

public interface LibraryInterface extends Remote {
    List<Book> getAllBooks() throws RemoteException;
    String borrowBook(int id) throws RemoteException;
    String returnBook(int id) throws RemoteException;
}
