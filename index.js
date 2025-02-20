const API_URL = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
const booksContainer = document.getElementById("books-container");
const addBookButton = document.getElementById("addBook");
const formInputs = document.querySelectorAll("input");
const successMessage = document.getElementById("success-message");
const loadingSpinner = document.getElementById("loading");


// Load books on page load
document.addEventListener("DOMContentLoaded", fetchBooks);

// Show loading spinner
function showLoading() {
    loadingSpinner.style.display = "block";
}
// Hide loading spinner
function hideLoading() {
    loadingSpinner.style.display = "none";
}

// Fetch books from the API and store them
async function fetchBooks() {
     // disppla a loading spinner so users know something is happening.
    showLoading();

    try {
        const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=YOUR_API_KEY");
        const data = await response.json();

        // Extract the first book list from the response
        const books = data.results.lists[0].books;

        // Save books to local storage in case there are errors later
        localStorage.setItem("books", JSON.stringify(books));

        // Display books in the "Books in Stock" table
        renderBooks(books);

        // Display books in the "Featured Books" section
        renderFeaturedBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);

        // Try loading cached books
        const cachedBooks = localStorage.getItem("books");
        if (cachedBooks) {
            const books = JSON.parse(cachedBooks);
            renderBooks(books);
            renderFeaturedBooks(books);
        }
    } finally {
        // Hide the loading spinner when finished
        hideLoading();
    }
}

// Create and display featured books
function renderFeaturedBooks(books) {
    const featuredBooksContainer = document.getElementById("featured-books");

    // Clear previous content
    featuredBooksContainer.innerHTML = "";

    // Get the first 3 books
    books.slice(0, 3).forEach(book => {

        // Create a new div for each book
        const bookCard = document.createElement("div");

        // Add a class for styling
        bookCard.classList.add("book-card"):

        bookCard.innerHTML = `
            <img class="author-photo" src="https://via.placeholder.com/100" alt="Author photo">
            <img class="book-cover" src="${book.book_image}" alt="Book cover">
            <h3 class="book-name">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-description">${book.description || "No description available."}</p>
        `;

        featuredBooksContainer.appendChild(bookCard); // Add the book card to the section
    });
}

//rocket and star trail
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
});
