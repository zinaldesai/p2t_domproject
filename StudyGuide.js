// Start by defining constants that store DOM elements and key information that the script interacts with. 
// This helps avoid repeatedly searching the DOM inside your functions, improving script performance.


// You need to know where to find elements (like buttons, containers, and input fields) 
// before interacting with them in your functions. This step is important because it ensures that you are targeting the correct elements in your HTML, 
// and you're not searching for them repeatedly each time the function runs.


// Define your API URL so it can be used later in the code
// API URLs are the links that connect your application to a database or external server. The fetch request uses this URL to pull data from a source.
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Define the container for the books and get the element by its ID from your HTML (in the table body).
// Always end with a semicolon, and in the parentheses is the ID of the element. This ID is what links your JavaScript to the HTML element you want to manipulate.
const booksContainer = document.getElementById("books-container");

// Define the button to add a book and get the element by its ID from your HTML. 
// This triggers the element, and the ID is inside the parentheses. The button element is where users will click to perform an action in your app.
const addBookButton = document.getElementById("addBook"); // Corrected typo from 'getElemetById' to 'getElementById'

// Define the input fields and get all elements with the 'input' tag from your HTML. 
// Use querySelectorAll to get all inputs, which is more flexible than getElementById and lets you select multiple elements.
const formInputs = document.querySelectorAll("input");

// Define the success message element and get it by its ID.
// This message will show up when a certain action is completed (like adding a book), confirming that the task was successful.
const successMessage = document.getElementById("success-message");

// Define the loading spinner and get the element by its ID.
// The loading spinner provides feedback to users that something is happening in the background, like waiting for data to load.
const loadingSpinner = document.getElementById("loading");

// First event listener: waits for the DOMContentLoaded event (when the HTML is fully loaded but before media/images).
// Once the DOM is ready, it calls the fetchBooks function. 
// 'DOMContentLoaded' makes sure all HTML elements are available before the script runs, ensuring that you can safely interact with them.
document.addEventListener("DOMContentLoaded", fetchBooks);

// Helper function to show the loading spinner by setting its display property to "block", making it visible.
// The loading spinner is useful when you're fetching data or performing a long-running task to show the user that the process is ongoing.
function showLoading() {
    loadingSpinner.style.display = "block";
}

// Helper function to hide the loading spinner by setting its display property to "none", making it invisible.
// Once the task is complete (like fetching data), you hide the spinner to show that the process is done.
function hideLoading() {
    loadingSpinner.style.display = "none";
}

// Function to fetch books from the API and display them.
// The 'async' keyword makes the function asynchronous, meaning it will return a promise. 
// This allows the program to continue running without waiting for this function to complete, and only pauses inside this function when necessary.
async function fetchBooks() {
    showLoading(); // Show loading spinner while data is being fetched

    try {
        // Fetch data from the API. 'await' pauses until the data is fetched. 
        // Fetch sends a request to the API URL and returns a promise with the data.
        const response = await fetch(API_URL);

        // Parse the response as JSON and store it in the books variable.
        // Once the data is fetched, it's often in a format like a string. We use the 'json' method to parse it into a JavaScript object, 
        // which makes it easier to work with in your code.
        const books = await response.json();

        // Cache the books in localStorage to avoid fetching them again later.
        // localStorage is a way to store data on the user's browser so it persists between page reloads. 
        // We're storing the books here so that we can use them again without making another request to the API.
        localStorage.setItem("books", JSON.stringify(books));

        // Render the books in the table. 
        // This step involves displaying the fetched books in the user interface (e.g., in a table format).
        renderBooks(books);

    } catch (error) {
        // Log any error that occurs in the fetch process.
        // If there's an issue fetching the data (e.g., no internet connection), it will be caught here.
        console.error("Error fetching books:", error);

        // Fallback: if an error occurs, check if books are cached in localStorage.
        // We use the cached data stored in localStorage to display the books even when the fetch fails.
        const cachedBooks = localStorage.getItem("books");

        // If cached books exist, render them. This ensures that even if the network is down, users can still see something.
        if (cachedBooks) renderBooks(JSON.parse(cachedBooks));
    } finally {
        // Whether the fetch was successful or failed, hide the loading spinner.
        // Finally ensures this step happens no matter what.
        hideLoading();
    }
}
