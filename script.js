window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id");

  fetch("recipes.json")
    .then((response) => response.json())
    .then((recipes) => {
      const recipe = recipes.find((r) => r.id === recipeId);

      if (recipe) {
        document.getElementById("recipe-name").innerText = recipe.name.toUpperCase();
        document.getElementById("recipe-image").src = recipe.image;
        document.getElementById("recipe-image").height = 600;
        document.getElementById("recipe-image").width = 400;
        document.getElementById("recipe-image").alt = recipe.name;
        document.getElementById("recipe-description").innerText = recipe.description;
        document.getElementById("recipe-time").innerText = recipe.time;
        document.getElementById("recipe-servings").innerText = recipe.servings;
        document.getElementById("recipe-difficulty").innerText = recipe.difficulty;

        const ingredientsList = document.getElementById("ingredients-list");
        recipe.ingredients.forEach((ingredient) => {
          const li = document.createElement("li");
          li.innerText = ingredient;
          ingredientsList.appendChild(li);
        });

        const instructionsList = document.getElementById("instructions-list");
        instructionsList.style.listStyleType = "none";
        instructionsList.style.paddingLeft = "0";
        recipe.instructions.forEach((instruction) => {
          const li = document.createElement("li");
          li.innerHTML = `${instruction}<br><br>`;
          instructionsList.appendChild(li);
        });

        const renderReviews = () => {
          const container = document.getElementById("reviews-container");
          container.innerHTML = "";
          if (recipe.reviews.user_reviews.length === 0) {
            container.innerHTML = `
              <div class="no-reviews-message">
                  <p>No reviews yet! Be the first to add one...</p>
              </div>`;
          } else {
            recipe.reviews.user_reviews.forEach((review) => {
              const reviewHTML = `
                <div class="review-item">
                  <div class="review-header">
                    <img src="images/defaultProfile.jpg" class="profile-pic">
                    <div class="review-details">
                      <h3 class="reviewer-username">${review.username}</h3>
                      <div class="review-stars-and-date">
                        <p class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
                        <span class="review-stars-seperator">·</span>
                        <p class="review-date">Reviewed on ${new Date(review.postedAt).toLocaleDateString('en-IN')} at ${new Date(review.postedAt).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </div>
                  <div class="review-content">
                    <p class="review-text">${review.comment}</p>
                  </div>
                </div>
                <hr class="review-seperator">`;
              container.innerHTML += reviewHTML;
            });
          }
        };
        renderReviews();
      } else {
        alert("Recipe not found!");
      }
    })
    .catch((error) => {
      console.error("Error fetching the recipe data:", error);
    });
};
