export default function cardNumber() {
  const numberInput = document.getElementById("infos-number");
  const numbers = document.querySelectorAll(".card-number span");

  numberInput.addEventListener("input", () => {
    const input = numberInput.value;
    const inputLength = input.length;

    if (input === "") {
      numbers.forEach((number) => (number.innerText = "xxxx"));
    } else {
      switch (true) {
        case inputLength <= 4:
          numbers[0].innerText = input;

        case inputLength <= 8:
          numbers[1].innerText = input.slice(4);

        case inputLength <= 12:
          numbers[2].innerText = input.slice(8);

        case inputLength > 12:
          numbers[3].innerText = input.slice(12);

        default:
          break;
      }
    }
  });
}
