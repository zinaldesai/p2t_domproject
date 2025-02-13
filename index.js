const API_URL = "https://";
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

// Fetch books from API and display them
async function fetchBooks() {
    showLoading();
    try {
        const response = await fetch(API_URL);
        const books = await response.json();
        localStorage.setItem("books", JSON.stringify(books));
        renderBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        const cachedBooks = localStorage.getItem("books");
        if (cachedBooks) renderBooks(JSON.parse(cachedBooks));
    } finally {
        hideLoading();
    }
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
