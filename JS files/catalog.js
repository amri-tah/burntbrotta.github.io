document.addEventListener("DOMContentLoaded", function () {
    fetch("./recipes.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((recipes) => {
            console.log("Fetched recipes:", recipes);
            const catalogContainer = document.getElementById("catalog-container");
            if (!catalogContainer) {
                console.error("Catalog container not found");
                return;
            }

            recipes.forEach((recipe) => {
                const recipeElement = document.createElement("div");
                recipeElement.className = "pro";
                recipeElement.innerHTML = `
                    <div class="image-container">
                        <img src="${recipe.image}" alt="${recipe.name}" />
                        <div class="overlay-text">${recipe.description}</div>
                    </div>
                    <div class="description">
                        <span><b>${recipe.name}</b></span>
                        <h2></h2>
                        <div class="tags_div">
                            <div class="tag">${recipe.time}</div>
                        </div>
                        <div class="review" style="color: rgb(243, 181, 25)">
                            ${generateStars(recipe.reviews.user_reviews)}
                        </div>
                    </div>
                    <a href="recipe.html?id=${recipe.id}">
                        <i class="fas fa-heart basket"></i>
                    </a>
                `;

                recipeElement.addEventListener("click", () => {
                    window.location.href = `recipe.html?id=${recipe.id}`;
                });

                console.log("Appending recipe element:", recipeElement);
                catalogContainer.appendChild(recipeElement);
            });
        })
        .catch((error) => {
            console.error("Error fetching the recipe data:", error);
        });
});

function generateStars(reviews) {
    const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < averageRating) {
            stars += '<i class="fas fa-star"></i> ';
        } else {
            stars += '<i class="far fa-star"></i> ';
        }
    }
    return stars.trim();
}
