export default function cardFlip() {
  const card = document.querySelectorAll(".card");
  const cardSides = document.querySelectorAll(".card-side");
  const wrapper = document.querySelector(".card-wrapper");

  const numberInput = document.getElementById("infos-number");
  const nameInput = document.getElementById("infos-name");
  const selectMonth = document.querySelector("#infos-month");
  const selectYear = document.querySelector("#infos-year");
  const cvvInput = document.getElementById("infos-cvv");

  // Handles the animation and visibility of the card sides when flipping the card
  function condition() {
    card.forEach((card) => {
      if (card.classList.contains("flipped")) {
        wrapper.style.animation =
          "rotate var(--card-transition-time) linear both";
      } else {
        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";
      }
    });
  }

  if (card.length && cardSides.length && wrapper) {
    // Insert event into card
    card.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");

        condition();

        cardSides.forEach((side) => {
          side.classList.toggle("hidden");
        });
      });
    });

    // Insert click event into card number input
    numberInput.addEventListener("click", () => {
      card.forEach((card) => {
        card.classList.remove("flipped");

        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";

        cardSides.forEach((side) => {
          if (side.id === "card-front") {
            side.classList.remove("hidden");
          } else {
            side.classList.add("hidden");
          }
        });
      });
    });

    // Insert click event into name input
    nameInput.addEventListener("click", () => {
      card.forEach((card) => {
        card.classList.remove("flipped");

        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";

        cardSides.forEach((side) => {
          if (side.id === "card-front") {
            side.classList.remove("hidden");
          } else {
            side.classList.add("hidden");
          }
        });
      });
    });

    // Insert click event into month input
    selectMonth.addEventListener("click", () => {
      card.forEach((card) => {
        card.classList.remove("flipped");

        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";

        cardSides.forEach((side) => {
          if (side.id === "card-front") {
            side.classList.remove("hidden");
          } else {
            side.classList.add("hidden");
          }
        });
      });
    });

    // Insert click event into year input
    selectYear.addEventListener("click", () => {
      card.forEach((card) => {
        card.classList.remove("flipped");

        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";

        cardSides.forEach((side) => {
          if (side.id === "card-front") {
            side.classList.remove("hidden");
          } else {
            side.classList.add("hidden");
          }
        });
      });
    });

    // Insert click event into CVV input
    cvvInput.addEventListener("click", () => {
      card.forEach((card) => {
        card.classList.add("flipped");

        wrapper.style.animation =
          "rotate var(--card-transition-time) linear both";

        cardSides.forEach((side) => {
          if (side.id === "card-back") {
            side.classList.remove("hidden");
          } else {
            side.classList.add("hidden");
          }
        });
      });
    });
  }
}
