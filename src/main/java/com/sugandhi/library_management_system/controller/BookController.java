package com.sugandhi.library_management_system.controller;

import com.sugandhi.library_management_system.entity.Book;
import com.sugandhi.library_management_system.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/books/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/books/category/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category) {
        return bookService.getBooksByCategory(category);
    }

    @GetMapping("/books/search/{title}")
    public List<Book> searchBooksByTitle(@PathVariable String title) {
        return bookService.searchBooksByTitle(title);
    }

    @GetMapping("/books/author/{author}")
    public List<Book> searchBooksByAuthor(@PathVariable String author) {
        return bookService.searchBooksByAuthor(author);
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @PutMapping("/books/{id}")
    public Book updateBook(
            @PathVariable Long id,
            @RequestBody Book book) {

        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/books/{id}")
    public String deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return "Book deleted successfully!";
    }

    @PostMapping("/books/issue/{id}")
    public Book issueBook(@PathVariable Long id) {
        return bookService.issueBook(id);
    }

    @PostMapping("/books/return/{id}")
    public Book returnBook(@PathVariable Long id) {
        return bookService.returnBook(id);
    }
    @GetMapping("/books/fine/{days}")
    public int calculateFine(@PathVariable int days) {
        return bookService.calculateFine(days);
    }
}