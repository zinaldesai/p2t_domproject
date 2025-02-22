//rocket and star trail -- added to the top bc async function runs first and cursor disappears from the webpage! 
document.addEventListener("DOMContentLoaded", () => {
    const cursorStar = document.createElement("div");
    cursorStar.classList.add("cursor-star");
    document.body.appendChild(cursorStar);


    document.addEventListener("mousemove", (e) => {
        cursorStar.style.left = `${e.clientX}px`;
        cursorStar.style.top = `${e.clientY}px`;


        for (let i = 0; i < 2; i++) {
            const star = document.createElement("div");
            star.classList.add("star");


            const size = Math.random() * 4 + 2;
            const xOffset = (Math.random() - 0.5) * 15;
            const yOffset = (Math.random() - 0.5) * 15;


            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${e.clientX + xOffset}px`;
            star.style.top = `${e.clientY + yOffset}px`;


            document.body.appendChild(star);


            setTimeout(() => {
                star.remove();
            }, 500);
        }
    });

    fetchBooksFromAPI(); // Loading books from API when the page loads
});


// API URL and elements
// const API_KEY = ""
const API_URL = "https://gutendex.com/books/";
const booksContainer = document.getElementById("booksContainer");
const addBookButton = document.getElementById("addBook");
const bookForm = document.getElementById("bookForm"); 

// Function to fetch books from Gutendex API
async function fetchBooksFromAPI() {
    try {
        booksContainer.innerHTML = `<tr><td colspan="3">Loading books...</td></tr>`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            booksContainer.innerHTML = `<tr><td colspan="3">No books found.</td></tr>`;
            return;
        }

        booksContainer.innerHTML = ""; // Clear previous content

        data.results.forEach((book) => {
            const bookRow = document.createElement("tr");
            bookRow.innerHTML = `
                <td>${book.title}</td>
                <td>${book.authors.map(author => author.name).join(", ")}</td>
                <td>Public Domain</td> <!-- Gutendex does not provide publisher info -->
            `;
            booksContainer.appendChild(bookRow);
        });
    } catch (error) {
        booksContainer.innerHTML = `<tr><td colspan="3">Error fetching books: ${error.message}</td></tr>`;
    }
}

function addBook(event) {
    event.preventDefault();

    //get form values 
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const publisher = document.getElementById("publisher").value.trim();

    //ensure all form values are filled out before submitting
    if (!title || !author || !publisher) {
        alert("Please fill out all fields.");
        return;
    }

    //create a new book Row for the filled form submission
    const bookRow = document.createElement("tr");
    bookRow.innerHTML = `
        <td class="book-title">${title}</td>
        <td class="book-author">${author}</td>
        <td class="book-publisher">${publisher}</td>
        <td><button class="delete-button">Delete</button></td>`;

        booksContainer.appendChild(bookRow);

        bookRow.querySelector(".delete-button").addEventListener("click", () => {
            bookRow.remove();
        });

        //clear input fields
        bookForm.reset();

    }
        //add event listener
        bookForm.addEventListener("submit", addBook);
        // window.addEventListener("DOMContentLoaded", bookList);


// Get elements
const hamburger = document.getElementById("hamburger"); // load the hamburger
const sideMenu = document.getElementById("side-menu"); // load the side menu

// Toggle menu on click
hamburger.addEventListener("click", () => { // When the hamburger is clicked....
    sideMenu.classList.toggle("active"); // Add or remove the active class so you can see the menu
    hamburger.classList.toggle("active"); // Add or remove the active class so you cant see the menu
});
// Render books to the page from API...removed because pre-loaded books are not needed for this project but we can add it.
// async function bookList() {
//     try {
//         booksContainer.innerHTML = `<p>Loading...</p>`;
//         const response = await fetch(API_URL);
//         const data = await response.json(); 
//         booksContainer.innerHTML = "";  

//         //Ensure book info from API is not empty
//         if (data.length === 0) {
//             booksContainer.innerHTML = `<p>No books found.</p>`;
//             return;
//         }
        
//         data.results.forEach((book) => {
//             const bookRow = document.createElement("tr"); 
//             bookRow.innerHTML = `
//                 <td class="book-title">${book.title}</td>
//                 <td class="book-author">${book.authors.name}</td>
//                 <td class="book-publisher">${book.id}</td>`;
        
//          booksContainer.appendChild(bookRow);
//         });
//     } catch (error) {
//         booksContainer.innerHTML = `<p>Error: ${error.message}</p>`;
//     };
// }

// addBookButton.addEventListener("click", bookList);





// const formInputs = document.querySelectorAll("input");
// const successMessage = document.getElementById("success-message");
// const loadingSpinner = document.getElementById("loading");

//delete button for boookList
/* <button class="delete-button" onclick="deleteBook(${book.primary_isbn13})">Delete</button> */


// Load books on page load
// document.addEventListener("DOMContentLoaded", fetchBooks);

// Show loading spinner
// function showLoading() {
//     loadingSpinner.style.display = "block";
// }
// Hide loading spinner
// function hideLoading() {
//     loadingSpinner.style.display = "none";
// }

// Fetch books from API and display them
// async function fetchBooks() {
//     showLoading();
//     try {
//         const response = await fetch(API_URL);
//         const books = await response.json();
//         localStorage.setItem("books", JSON.stringify(books));
//         renderBooks(books);
//     } catch (error) {
//         console.error("Error fetching books:", error);
//         const cachedBooks = localStorage.getItem("books");
//         if (cachedBooks) renderBooks(JSON.parse(cachedBooks));
//     } finally {
//         hideLoading();
//     }
// }


//     booksContainer.innerHTML = "";
//     books.forEach(book => {
//         const bookRow = document.createElement("tr");
//         bookRow.classList.add("book-row");
//         bookRow.innerHTML = `
//             <td class="book-title">${book.title}</td>
//             <td class="book-author">${book.author}</td>
//             <td class="book-publisher">${book.publisher} <button class="delete-button" onclick="deleteBook(${book.primary_isbn13})">Delete</button></td>`
//         booksContainer.appendChild(bookRow);
//     });

// }

// }