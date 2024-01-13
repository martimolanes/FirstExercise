const date = document.querySelector('.date');

date.textContent = new Date().getFullYear();

document.getElementById("actionButton").addEventListener("click", function() {
    const p = document.querySelector('#description');
    if (p.style.visibility === 'hidden') {
        p.style.visibility = 'visible';
    } else {
        p.style.visibility = 'hidden';
    }
})


