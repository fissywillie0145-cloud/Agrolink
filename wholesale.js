document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("wholesaleForm");

    const businessName =
        document.getElementById("businessName");

    const contactPerson =
        document.getElementById("contactPerson");

    const produce =
        document.getElementById("produce");

    const quantity =
        document.getElementById("quantity");

    const requirements =
        document.getElementById("requirements");

    const formMessage =
        document.getElementById("formMessage");


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const business =
            businessName.value.trim();

        const contact =
            contactPerson.value.trim();

        const product =
            produce.value.trim();

        const amount =
            quantity.value.trim();


        if (
            business === "" ||
            contact === "" ||
            product === "" ||
            amount === ""
        ) {

            formMessage.textContent =
                "Please complete all required fields before submitting your wholesale request.";

            formMessage.classList.add("show");

            return;
        }


        formMessage.textContent =
            "Your wholesale request has been prepared successfully. AgroLink can now connect this form to your backend or request system.";

        formMessage.classList.add("show");


        form.reset();

    });

});