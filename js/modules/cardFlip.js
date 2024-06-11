export default function cardFlip() {
  const card = document.querySelectorAll(".card");
  const cardSides = document.querySelectorAll(".card-side");
  const wrapper = document.querySelector(".card-wrapper");
  const cvvInput = document.getElementById("infos-cvv");

  card.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");

      if (card.classList.contains("flipped")) {
        wrapper.style.animation =
          "rotate var(--card-transition-time) linear both";
      } else {
        wrapper.style.animation =
          "rotate-inverse var(--card-transition-time) linear both";
      }

      cardSides.forEach((side) => {
        side.classList.toggle("hidden");
      });
    });
  });

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
