document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("formSuccess");

    if (!form) {
        return;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;


        // Remove previous errors

        const groups = form.querySelectorAll(".form-group");

        groups.forEach(function (group) {
            group.classList.remove("error");
        });


        // Name

        const name = document.getElementById("name");

        if (name.value.trim() === "") {

            name.closest(".form-group").classList.add("error");

            isValid = false;
        }


        // Email

        const email = document.getElementById("email");

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            email.value.trim() === "" ||
            !emailPattern.test(email.value.trim())
        ) {

            email.closest(".form-group").classList.add("error");

            isValid = false;
        }


        // Enquiry

        const enquiry = document.getElementById("enquiry");

        if (enquiry.value === "") {

            enquiry.closest(".form-group").classList.add("error");

            isValid = false;
        }


        // Message

        const message = document.getElementById("message");

        if (message.value.trim() === "") {

            message.closest(".form-group").classList.add("error");

            isValid = false;
        }


        // Stop if invalid

        if (!isValid) {

            const firstError =
                form.querySelector(".form-group.error input, .form-group.error select, .form-group.error textarea");

            if (firstError) {
                firstError.focus();
            }

            return;
        }


        // Successful front-end submission

        successMessage.classList.add("show");

        form.reset();

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // Remove error as user starts correcting the field

    const inputs =
        form.querySelectorAll("input, select, textarea");

    inputs.forEach(function (input) {

        input.addEventListener("input", function () {

            input
                .closest(".form-group")
                .classList.remove("error");

        });

        input.addEventListener("change", function () {

            input
                .closest(".form-group")
                .classList.remove("error");

        });

    });


    // Smooth scrolling for internal links

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});