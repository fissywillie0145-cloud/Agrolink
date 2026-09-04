document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("sidebar");
    const sidebarOpen = document.getElementById("sidebarOpen");
    const sidebarClose = document.getElementById("sidebarClose");
    const sidebarOverlay = document.getElementById("sidebarOverlay");



    /* =====================================
       MOBILE SIDEBAR
    ===================================== */

    if (sidebarOpen) {
        sidebarOpen.addEventListener("click", function () {

            sidebar.classList.add("show");
            sidebarOverlay.classList.add("show");

        });
    }


    function closeSidebar() {

        sidebar.classList.remove("show");
        sidebarOverlay.classList.remove("show");

    }


    if (sidebarClose) {
        sidebarClose.addEventListener("click", closeSidebar);
    }


    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", closeSidebar);
    }



    /* =====================================
       ACTIVE SIDEBAR LINK
    ===================================== */

    const currentPage =
        window.location.pathname.split("/").pop() ||
        "farmer-dashboard.html";


    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");


    sidebarLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            sidebarLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }


        /* Close mobile sidebar after navigation */

        link.addEventListener("click", function () {

            if (window.innerWidth <= 991) {
                closeSidebar();
            }

        });

    });



    /* =====================================
       PREVENT BROKEN LINKS
    ===================================== */

    document.querySelectorAll("a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

    });

});