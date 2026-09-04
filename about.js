document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".about-reveal");

    if (!revealElements.length) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});