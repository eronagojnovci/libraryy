package com.library;
import java.rmi.Naming;

public class Server {
    public static void main(String[] args) {
        try {
            LibraryImpl obj = new LibraryImpl();
            Naming.rebind("LibraryService", obj);
            System.out.println("Server is running...");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
