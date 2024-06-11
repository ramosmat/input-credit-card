export default function inputName() {
  const nameInput = document.getElementById("infos-name");
  const name = document.querySelector(".cardholder span");

  if (nameInput && name) {
    nameInput.addEventListener("input", () => {
      name.innerText = nameInput.value;

      if (nameInput.value === "") {
        name.innerText = "Seu nome aqui";
      } else {
        name.innerText = nameInput.value;
      }
    });
  }
}
