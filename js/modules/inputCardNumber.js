export default function cardNumber() {
  const numberInput = document.getElementById("infos-number");
  const number = document.querySelectorAll(".card-number span");

  numberInput.addEventListener("input", (event) => {
    const input = numberInput.value;

    if (input === "") {
      number.forEach((number) => (number.innerText = "xxxx-xxxx-xxxx-xxxx"));
    } else {
      // script to add "-" every 4 numbers
      let formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1-");

      number[0].innerText = formattedInput;
    }
  });
}
