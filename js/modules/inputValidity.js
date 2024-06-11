// Function to get value selected into tag select and insert into .validity div spans
export default function inputValidity() {
  const selectMonth = document.querySelector("#infos-month");
  const selectYear = document.querySelector("#infos-year");

  if (selectMonth.length && selectYear.length) {
    //Change month function
    selectMonth.addEventListener("change", (e) => {
      const value = e.target.value;
      const validityMonth = document.querySelector(
        ".validity span:first-child"
      );

      validityMonth.innerText = value;
    });

    //Change year function
    selectYear.addEventListener("change", (e) => {
      const value = e.target.value;
      const validityYear = document.querySelector(".validity span:last-child");

      validityYear.innerText = value;
    });
  }
}
