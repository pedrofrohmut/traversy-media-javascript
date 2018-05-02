import reddit from "./redditapi.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchLimitInput = document.getElementById("limit");
const resultsOutput = document.getElementById("results");

// CONSTANTS
const truncadeLimitForTitle = 0;
const truncadeLimitForText = 120;

searchForm.addEventListener("submit", e => formSubmit(e))

const formSubmit = function (e) {
    // Get search term
    const searchTerm = searchInput.value;
    // Get sort
    const sortBy = document.querySelector(`input[name="sortby"]:checked`).value;
    // Get the limit
    const searchLimit = searchLimitInput.value;
    // Check input
    if (searchTerm === "") {
        // Show message (msg, cssClass)
        showMessage("Please add a search term", "alert-danger");
    }

    // Clear input
    searchInput.value = "";

    // Search Reddit 
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            let output = `
            <h3>Searched for: <strong>${searchTerm}</strong></h3>
            <div class="card-columns">`;
            // Loop through posts
            results.forEach(post => {
                // Format data before output
                const truncadedTitle = truncadeText(post.title, truncadeLimitForTitle);
                const truncadedText = truncadeText(post.selftext, truncadeLimitForText);
                // Makes a bootstrap-card for the current post    
                output += `
                <div class="card">`
                // Show img tag only when IMG available
                if (post.preview !== undefined) {
                    const imgSrc = post.preview.images[0].source.url;
                    output += 
                    `<img class="card-img-top" src="${imgSrc}">`
                } else {
                    output += 
                    `<img class="card-img-top" src="https://birkeland.h.uib.no/wp-content/themes/bcss/images/no.png">`
                }
                output +=    
                    `<div class="card-body">
                        <h5 class="card-title">${truncadedTitle}</h5>
                        <p class="card-text">${truncadedText}</p>
                        <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
                        <hr>
                        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                        <span class="badge badge-dark">Score: ${post.score}</span>
                    </div>
                </div>`;
            });
            output += `</div>`;
            resultsOutput.innerHTML = output;
        })

    e.preventDefault();
}

const showMessage = function (msg, cssClass) {
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.classList.add(`alert`);
    div.classList.add(`${cssClass}`);
    // Add text
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const searchContainer = document.getElementById("search-container");
    // Get search
    const search = document.getElementById("search")
    // Inner Message
    searchContainer.insertBefore(div, search);
    // Timeout Alert
    setTimeout(() => {
        document.querySelector(`.alert`).remove()
    }, 2500);
}

// Truncade text
const truncadeText = function (text, limit = 0) {
    // No limit informed
    if (limit === 0) return text;
    // starts the search after the limit a search for the next blank space, so it doesnt cut the word in the half => str.indexOf(searchValue [, fromIndex])
    const shortened = text.indexOf(" ", limit);
    // if there is no need to truncade the text
    if (shortened === -1) return text;
    
    return text.substring(0, shortened) + "... ";
}