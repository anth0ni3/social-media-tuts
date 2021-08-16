const modeToggler = document.querySelector(".mode-toggle");
const section = document.querySelectorAll("section");
const divs = document.querySelectorAll("div");
const span = document.querySelectorAll("span");
const h5 = document.querySelectorAll("h5");
const h4 = document.querySelectorAll("h4");
const h2 = document.querySelectorAll("h2");


modeToggler.addEventListener("click", function() {
    if (modeToggler.classList.contains("lightmode")) {
        modeToggler.classList.add("darkmode");
        modeToggler.classList.remove("lightmode");

        // for elements
        section.forEach(function(sec) {
            sec.classList.add("darkmode");
            sec.classList.remove("lightmode");
        })
        divs.forEach(function(div) {
            div.classList.add("darkmode");
            div.classList.remove("lightmode"); 
        })
        span.forEach(function(spa) {
            spa.classList.add("darkmode");
            spa.classList.remove("lightmode"); 
        })
        h5.forEach(function(h) {
            h.classList.add("darkmode");
            h.classList.remove("lightmode");
        })
        h4.forEach(function(h) {
            h.classList.add("darkmode");
            h.classList.remove("lightmode"); 
        })
        h2.forEach(function(h) {
            h.classList.add("darkmode");
            h.classList.remove("lightmode"); 
        })
        


    } else {
        modeToggler.classList.add("lightmode");
        modeToggler.classList.remove("darkmode");
        // for elements

        section.forEach(function(sec) {
            sec.classList.add("lightmode");
            sec.classList.remove("darkmode");
        });
        divs.forEach(function(div) {
            div.classList.add("lightmode");
            div.classList.remove("darkmode");
        });
        span.forEach(function(spa) {
            spa.classList.add("lightmode");
            spa.classList.remove("darkmode");
        });
        h5.forEach(function(h) {
            h.classList.add("lightmode");
            h.classList.remove("darkmode");
        });
        h4.forEach(function(h) {
            h.classList.add("lightmode");
            h.classList.remove("darkmode");
        });
        h2.forEach(function(h) {
            h.classList.add("lightmode");
            h.classList.remove("darkmode");
        });
        
    }

})