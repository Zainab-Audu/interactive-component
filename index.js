document.addEventListener("DOMContentLoaded", function () {
  const ratingContainer = document.querySelector(".nav");
  const submitBtn = document.getElementById("submitBtn");
  const thankYouState = document.querySelector(".thankYouState");

  // Initialize a variable to store the selected rating.
  let selectedRating = null;

  // Add click event listener to rating options using event delegation.
  ratingContainer.addEventListener("click", function (event) {
    const clickedRating = event.target.dataset.value;
    if (clickedRating) {
      // Update the selected rating and highlight the selected option.
      selectedRating = clickedRating;
      const ratingOptions = ratingContainer.querySelectorAll("li");
      ratingOptions.forEach((li) => {
        li.classList.remove("selected");
      });
      event.target.classList.add("selected");
    }
  });

  // Add click event listener to the submit button.
  submitBtn.addEventListener("click", function () {
    if (selectedRating !== null) {
      // Hide the rating options and show the thank you message.
      ratingContainer.style.display = "none";
      submitBtn.style.display = "none";
      thankYouState.style.display = "block";
    } else {
      alert("Kindly select a rating before submitting.");
    }
  });
});
