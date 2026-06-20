# Library Management System

## Overview

A full-stack Library Management System built using Spring Boot, MySQL, HTML, CSS, and JavaScript.

The application allows users to manage books through CRUD operations, search books, issue and return books, and view dashboard statistics.

---

## Features

* Add new books
* View all books
* Update book details
* Delete books
* Search books by title
* Issue books
* Return books
* Dashboard statistics
* Exception handling using custom exceptions

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL

### Frontend

* HTML
* CSS
* JavaScript

### Tools

* IntelliJ IDEA
* Git
* GitHub
* MySQL Workbench

---

## Project Architecture

Frontend (HTML, CSS, JavaScript)

↓

Controller Layer

↓

Service Layer

↓

Repository Layer

↓

MySQL Database

---

## API Endpoints

| Method | Endpoint              | Description    |
| ------ | --------------------- | -------------- |
| GET    | /books                | Get all books  |
| GET    | /books/{id}           | Get book by ID |
| POST   | /books                | Add a book     |
| PUT    | /books/{id}           | Update a book  |
| DELETE | /books/{id}           | Delete a book  |
| GET    | /books/search/{title} | Search books   |
| POST   | /books/issue/{id}     | Issue a book   |
| POST   | /books/return/{id}    | Return a book  |

---

## Exception Handling

The project uses:

* BookNotFoundException
* GlobalExceptionHandler

to provide meaningful error responses.

---

## Learning Outcomes

* Spring Boot REST APIs
* Layered Architecture
* Spring Data JPA
* Hibernate ORM
* MySQL Integration
* Frontend and Backend Integration
* Git and GitHub Workflow

---

## Author

Sugandhi Bansal
B.Tech CSE (AIML)
ABES Engineering College
GitHub: https://github.com/sugandhi516
