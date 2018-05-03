// Form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
};    

// Total Stars
const starsTotal = 5;

// STATE
let selectedProduct;

// onChange Product select
const selectAProduct = function (e) {
    brand = e.target.value;
    // Change State
    selectedProduct = brand;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[brand];
};

// onBlur rating control
const rateTheSelectedProduct = function (e, brand) {
    const newRate = e.target.value;
    // If it isEmpty === nothing to do
    if (ratings === "") {
        return;
    }
    // Make sure it is five or under
    if (newRate > 5) {
        alert("Please rate between 1 and 5")
        return;
    }
    // Check rating
    ratings[selectedProduct] = newRate;
    // Update the ratings
    getRatings();
}

// Get ratings
const getRatings = function () {
    Object.keys(ratings).forEach( brand => {
        const rate = ratings[brand];
        // Get percentage
        const percentage = (rate / starsTotal) * 100;
        // Round to nearest 10
        const roundedPercentage = Math.round(percentage / 10) * 10;
        // Set width of starts-inner to percentage
        const starsInner = document.querySelector(`.${brand} .stars-inner`);
        starsInner.style.width = `${roundedPercentage}%`;
        // Show number rating 
        const numberRating = document.querySelector(`.${brand} .number-rating`);
        numberRating.innerText = rate;
    });
};

// SETUP
const setup = function (e) {
    getRatings();
};

// EVENT LISTENERS
productSelect.addEventListener("change", e => selectAProduct(e));
ratingControl.addEventListener("keyup", e => rateTheSelectedProduct(e, selectedProduct));
ratingControl.addEventListener("input", e => rateTheSelectedProduct(e, selectedProduct));
document.addEventListener("DOMContentLoaded", e => setup());