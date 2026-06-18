let updateId = null;

loadBooks();

function loadBooks() {

    fetch("http://localhost:8081/books")
        .then(response => response.json())
        .then(data => {

            let table = document.getElementById("bookTable");
            table.innerHTML = "";

            data.forEach(book => {

                let row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>

                        <td>

                            <button
                                style="background:#3498db;color:white"
                                onclick="editBook(${book.id},
                                '${book.title}',
                                '${book.author}',
                                '${book.category}',
                                ${book.quantity})">
                                Update
                            </button>

                            <button
                                style="background:#f1c40f;color:black"
                                onclick="issueBook(${book.id})">
                                Issue
                            </button>

                            <button
                                style="background:#2ecc71;color:white"
                                onclick="returnBook(${book.id})">
                                Return
                            </button>

                            <button
                                style="background:#e74c3c;color:white"
                                onclick="deleteBook(${book.id})">
                                Delete
                            </button>

                        </td>
                    </tr>
                `;

                table.innerHTML += row;
            });

        })
        .catch(error => console.log(error));
}

function addBook() {

    if (updateId !== null) {
        updateBook();
        return;
    }

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value,
        quantity: parseInt(document.getElementById("quantity").value)
    };

    fetch("http://localhost:8081/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
        .then(response => response.json())
        .then(() => {

            alert("Book added successfully!");

            clearForm();
            loadBooks();

        })
        .catch(error => console.log(error));
}

function editBook(id, title, author, category, quantity) {

    updateId = id;

    document.getElementById("title").value = title;
    document.getElementById("author").value = author;
    document.getElementById("category").value = category;
    document.getElementById("quantity").value = quantity;

    document.querySelector("button[onclick='addBook()']")
        .innerText = "Update Book";
}

function updateBook() {

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value,
        quantity: parseInt(document.getElementById("quantity").value)
    };

    fetch(`http://localhost:8081/books/${updateId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
        .then(response => response.json())
        .then(() => {

            alert("Book updated successfully!");

            updateId = null;

            clearForm();

            document.querySelector("button[onclick='addBook()']")
                .innerText = "Add Book";

            loadBooks();

        })
        .catch(error => console.log(error));
}

function deleteBook(id) {

    if (!confirm("Are you sure you want to delete this book?")) {
        return;
    }

    fetch(`http://localhost:8081/books/${id}`, {
        method: "DELETE"
    })
        .then(() => {

            alert("Book deleted successfully!");

            loadBooks();

        })
        .catch(error => console.log(error));
}

function issueBook(id) {

    fetch(`http://localhost:8081/books/issue/${id}`, {
        method: "POST"
    })
        .then(() => {

            loadBooks();

        })
        .catch(error => console.log(error));
}

function returnBook(id) {

    fetch(`http://localhost:8081/books/return/${id}`, {
        method: "POST"
    })
        .then(() => {

            loadBooks();

        })
        .catch(error => console.log(error));
}

function searchBook() {

    const title = document.getElementById("searchTitle").value;

    fetch(`http://localhost:8081/books/search/${title}`)
        .then(response => response.json())
        .then(data => {

            let table = document.getElementById("bookTable");
            table.innerHTML = "";

            data.forEach(book => {

                let row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>

                        <td>

                            <button
                                style="background:#3498db;color:white"
                                onclick="editBook(${book.id},
                                '${book.title}',
                                '${book.author}',
                                '${book.category}',
                                ${book.quantity})">
                                Update
                            </button>

                            <button
                                style="background:#f1c40f;color:black"
                                onclick="issueBook(${book.id})">
                                Issue
                            </button>

                            <button
                                style="background:#2ecc71;color:white"
                                onclick="returnBook(${book.id})">
                                Return
                            </button>

                            <button
                                style="background:#e74c3c;color:white"
                                onclick="deleteBook(${book.id})">
                                Delete
                            </button>

                        </td>
                    </tr>
                `;

                table.innerHTML += row;
            });

        })
        .catch(error => console.log(error));
}

function clearForm() {

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("quantity").value = "";
}