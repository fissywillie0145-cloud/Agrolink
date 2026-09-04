 document.addEventListener("DOMContentLoaded", function () {

    const addButtons = document.querySelectorAll(".add-btn");
    const selectedProducts = document.getElementById("selectedProducts");
    const productCount = document.querySelector(".product-count");

    let selectedProduce = [];


    // ADD PRODUCT
    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const name = button.dataset.name;
            const category = button.dataset.category;
            const image = button.dataset.image;


            // Stop duplicate products
            const alreadySelected = selectedProduce.some(function (product) {
                return product.name === name;
            });

            if (alreadySelected) {
                return;
            }


            // Save selected product
            selectedProduce.push({
                name: name,
                category: category,
                image: image
            });


            // Change Add button to Added
            button.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            button.classList.add("added");

            button.disabled = true;


            // Update selected products
            displaySelectedProducts();

        });

    });



    // DISPLAY SELECTED PRODUCTS
    function displaySelectedProducts() {

        selectedProducts.innerHTML = "";


        selectedProduce.forEach(function (product, index) {

            const card = document.createElement("div");

            card.className = "selected-product-card";

            card.innerHTML = `
                
                <div class="selected-product-image">
                    <img 
                        src="${product.image}" 
                        alt="${product.name} from the farm">
                </div>

                <div class="selected-product-info">

                    <div>
                        <span class="selected-product-category">
                            ${product.category}
                        </span>

                        <h3>${product.name}</h3>

                        <p>Fresh farm produce</p>
                    </div>

                    <button 
                        class="remove-product" 
                        type="button"
                        data-index="${index}">
                        ×
                    </button>

                </div>
            `;


            selectedProducts.appendChild(card);

        });


        updateProductCount();

        addRemoveButtons();

    }



    // REMOVE PRODUCT
    function addRemoveButtons() {

        const removeButtons =
            document.querySelectorAll(".remove-product");


        removeButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index = Number(button.dataset.index);

                const removedProduct =
                    selectedProduce[index];


                // Remove from array
                selectedProduce.splice(index, 1);


                // Find the Add button for that product
                addButtons.forEach(function (addButton) {

                    if (
                        addButton.dataset.name ===
                        removedProduct.name
                    ) {

                        addButton.disabled = false;

                        addButton.innerHTML =
                            '<i class="fa-solid fa-plus"></i> Add';

                        addButton.classList.remove("added");

                    }

                });


                // Refresh display
                displaySelectedProducts();

            });

        });

    }



    // UPDATE PRODUCT COUNT
    function updateProductCount() {

        if (selectedProduce.length === 1) {

            productCount.textContent =
                "1 product";

        } else {

            productCount.textContent =
                selectedProduce.length + " products";

        }

    }

});