


var typed = new Typed(".animation-js",{
    strings:["Designer" , "Freelancer" , "Photographer" , "Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


// Show the site content after 30 seconds (30000 milliseconds)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-overlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1000);
});



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            document.querySelector(".navbar").classList.add("scrolled");
        } else {
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    });
});


  