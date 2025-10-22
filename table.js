const tableContainer = document.querySelector(".container-table");
const table = document.createElement("table");

const log = console.log;

for (let i = 0; i < 8; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    const td = document.createElement("td");
    td.dataset.tr = `r${i + 1}-c${j + 1}`;
    td.textContent = `Строка№${i + 1}-Столбец№${j + 1}`;
    tr.append(td);
  }

  table.append(tr);
}

table.addEventListener("click", (e) => {
  const clickTr = e.target;
  const cell = document.querySelectorAll("td");

  for (let i = 0; i < cell.length; i++) {
    cell[i].classList.remove("marker");
  }

  if (e.target.tagName === "TD") {
    clickTr.classList.add("marker");
  }
});

table.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

tableContainer.append(table);
