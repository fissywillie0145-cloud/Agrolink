document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("productSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-item");
    const noResults = document.getElementById("noResults");

    const orderCount = document.getElementById("orderCount");
    const selectedText = document.getElementById("selectedText");

    const addButtons = document.querySelectorAll(".add-product");

    let currentCategory = "all";
    let selectedProducts = [];


    /* =========================================
       FILTER PRODUCTS
    ========================================= */

    function filterProducts() {

        const searchValue = searchInput.value
            .toLowerCase()
            .trim();

        let visibleProducts = 0;

        products.forEach(function (product) {

            const productName =
                product.dataset.name.toLowerCase();

            const productCategory =
                product.dataset.category;

            const matchesSearch =
                productName.includes(searchValue);

            const matchesCategory =
                currentCategory === "all" ||
                productCategory === currentCategory;

            if (matchesSearch && matchesCategory) {

                product.style.display = "";

                visibleProducts++;

            } else {

                product.style.display = "none";

            }

        });


        if (visibleProducts === 0) {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }


    /* =========================================
       SEARCH
    ========================================= */

    searchInput.addEventListener("input", filterProducts);


    /* =========================================
       CATEGORY BUTTONS
    ========================================= */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            filterProducts();

        });

    });


    /* =========================================
       ADD PRODUCT
    ========================================= */

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const productName =
                button.dataset.product;

            if (!selectedProducts.includes(productName)) {

                selectedProducts.push(productName);

                button.textContent = "Added";
                button.classList.add("added");

            } else {

                selectedProducts =
                    selectedProducts.filter(function (item) {
                        return item !== productName;
                    });

                button.textContent = "Add";
                button.classList.remove("added");

            }

            updateOrderBar();

        });

    });


    /* =========================================
       UPDATE ORDER BAR
    ========================================= */

    function updateOrderBar() {

        orderCount.textContent =
            selectedProducts.length;

        if (selectedProducts.length === 0) {

            selectedText.textContent =
                "Your order is empty";

            return;

        }


        if (selectedProducts.length === 1) {

            selectedText.textContent =
                selectedProducts[0];

            return;

        }


        if (selectedProducts.length === 2) {

            selectedText.textContent =
                selectedProducts.join(" + ");

            return;

        }


        selectedText.textContent =
            selectedProducts[0] +
            " +" +
            (selectedProducts.length - 1) +
            " more";

    }


    /* =========================================
       REVIEW ORDER
    ========================================= */

    document
        .getElementById("viewOrderBtn")
        .addEventListener("click", function () {

            if (selectedProducts.length === 0) {

                alert(
                    "Please add at least one product to your order."
                );

                return;

            }


            /*
             * Replace this with the real selected-products
             * page when your routing is ready.
             */

            window.location.href =
                "selected-produce.html";

        });

});