// find the paragraph element with the class date
const date = document.querySelector('.date');

// Gets the year, using local time, and sets it to the text content of the date element
date.textContent = new Date().getFullYear();

// find the button element with the id actionButton and add an event listener
document.getElementById("actionButton").addEventListener("click", function() {
    const p = document.querySelector('#description');
    // check if the paragraph is hidden
    if (p.style.visibility === 'hidden') {
        p.style.visibility = 'visible';
    } else {
        p.style.visibility = 'hidden';
    }
})


