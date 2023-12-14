document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    function checkScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
        scrollToTopBtn.style.display = "block";
        scrollToTopBtn.style.opacity = 1; 
        } else {
            scrollToTopBtn.style.display = "none";
            scrollToTopBtn.style.opacity = 0; 
        }
    }
  
    checkScroll();
 
    window.addEventListener("scroll", checkScroll);

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInSection = document.querySelectorAll(".fade-in-section");
  
    function checkScroll() {
        const scrollPosition = window.scrollY;
  
        fadeInSection.forEach(function(section) {
            const sectionPosition = section.offsetTop;
  
            if (scrollPosition > sectionPosition - window.innerHeight + 100) {
            section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
});
