package com.library;

public class Book {
    private int id;
    private String title;
    private String author;
    private boolean available;
    private String cover;

    public Book() {}

    public Book(int id, String title, String author, boolean available, String cover) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        this.cover = cover;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean isAvailable() {
        return available;
    }
    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getCover() {
        return cover;
    }
    public void setCover(String cover) {
        this.cover = cover;
    }
}