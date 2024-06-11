export default function createYear() {
  const selectYear = document.querySelector("#infos-year");

  const dataAtual = new Date().getFullYear();
  const years = Array.from(new Array(5), (val, index) => dataAtual + index);

  // Alter years so that each year its only the last two caracters
  years.forEach((year, index) => {
    years[index] = year.toString().slice(2);
  });

  // Create options
  years.forEach((year) => {
    const option = document.createElement("option");

    option.value = year;
    option.innerText = year;

    selectYear.appendChild(option);
  });
}
