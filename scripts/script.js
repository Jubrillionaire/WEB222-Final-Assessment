document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.getElementById("reviews-container");

  function generateStars(rating) {
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    return `<span class="rating-stars">${stars}</span>`;
  }

  function createReviewCard(review) {
    const firstNameChar = review.name.split(" ")[0].charAt(0);
    const secondNameChar = review.name.split(" ")[1].charAt(0);
    return `
             <article class="review-card">
                    <div class="grid">
                        <div class="name-text">
                            <span>${firstNameChar} ${secondNameChar}</span>
                        </div>
                        <div class="details">
                              <h3>${review.name}</h3>
                              <p class="date">Date: ${review.date}</p>
                              <p class="rating">Rating: ${generateStars(
                                review.rating
                              )}</p>
                              <p class="text">${review.review}</p>
                        </div>
                    </div>
                </article>
        `;
  }

  function renderReviews() {
    reviewsContainer.innerHTML = reviewData.map(createReviewCard).join("");
  }

  renderReviews();
});
