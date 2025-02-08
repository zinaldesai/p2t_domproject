document.addEventListener("DOMContentLoaded", () => { // Wait for the DOM to load
    // Create a star cursor element
    const cursorStar = document.createElement("div"); // Create a new div element
    cursorStar.classList.add("cursor-star"); // Add a class to the div
    document.body.appendChild(cursorStar); // Append the div to the body

    document.addEventListener("mousemove", (e) => { // Listen for mouse movement
        // Update cursor-star position
        cursorStar.style.left = `${e.clientX}px`; // Set the left position of the cursor-star
        cursorStar.style.top = `${e.clientY}px`; // Set the top position of the cursor-star

        // Create star trail
        for (let i = 0; i < 2; i++) { // Create 2 stars
            const star = document.createElement("div"); // Create a new div element
            star.classList.add("star"); // Add a class to the div

            const size = Math.random() * 4 + 2; // Random size between 2px and 6px
            const xOffset = (Math.random() - 0.5) * 15; // Random horizontal offset
            const yOffset = (Math.random() - 0.5) * 15; // Random vertical offset

            star.style.width = `${size}px`; // Set the width of the star
            star.style.height = `${size}px`; // Set the height of the star
            star.style.left = `${e.clientX + xOffset}px`; // Set the left position of the star
            star.style.top = `${e.clientY + yOffset}px`; // Set the top position of the star

            document.body.appendChild(star); // Append the star to the body

            setTimeout(() => {  // Remove the star after 500ms
                star.remove(); // Remove the star after animation
            }, 500); // 500ms delay
        }
    });
});


