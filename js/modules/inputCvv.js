export default function inputCvv() {
  const cvvInput = document.querySelector("#infos-cvv");
  const cvv = document.querySelector(".cvv span:nth-child(2)");

  if (cvvInput && cvv) {
    cvvInput.addEventListener("input", (event) => {
      if (cvvInput.value === "") {
        cvv.innerText = "000";
      } else {
        cvv.innerText = event.target.value;
      }
    });
  }
}
