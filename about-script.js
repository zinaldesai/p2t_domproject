// Get elements
const hamburger = document.getElementById("hamburger"); // load the hamburger
const sideMenu = document.getElementById("side-menu"); // load the side menu

// Toggle menu on click
hamburger.addEventListener("click", () => { // When the hamburger is clicked....
    sideMenu.classList.toggle("active"); // Add or remove the active class so you can see the menu
    hamburger.classList.toggle("active"); // Add or remove the active class so you cant see the menu
});

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

});