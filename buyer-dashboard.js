document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");
    const sidebar = document.getElementById("sidebar");

    /* ===============================
       MOBILE SIDEBAR
    =============================== */

    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener("click", function () {

            sidebar.classList.toggle("show");

        });

    }


    /* ===============================
       ACTIVE SIDEBAR LINK
    =============================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");

    sidebarLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("?")[0];

        if (linkPage === currentPage) {

            sidebarLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });


    /* ===============================
       ADD FUNDS BUTTON
    =============================== */

    const addFundsButton =
        document.querySelector(".add-funds-btn");

    if (addFundsButton) {

        addFundsButton.addEventListener("click", function () {

            window.location.href =
                "buyer-section.html?section=payments";

        });

    }


    /* ===============================
       SEARCH
    =============================== */

    const searchInput =
        document.querySelector(".dashboard-search input");

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const searchValue =
                    searchInput.value.trim();

                if (searchValue !== "") {

                    window.location.href =
                        "buyer-section.html?section=browse-products&search="
                        + encodeURIComponent(searchValue);

                }

            }

        });

    }

});