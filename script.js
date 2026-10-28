import data from "./data.json" with { type: "json" };

let tbody = document.getElementById("tbody");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let searchBtn = document.getElementById("searchbtn");
let searchInput = document.getElementById("searchinput");
let dataInJs = data;

function renderAllData(arr) {
  tbody.innerHTML = "";
  arr.forEach((item) => {
    tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.first_name} ${item.last_name}</td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing}</td>
                <td>${item.email}</td>
            </tr>
    `;
  });
}

button1.addEventListener("click", () => sortAToZ());
button2.addEventListener("click", () => sortZToA());
button3.addEventListener("click", () => sortByMarks());
button4.addEventListener("click", () => sortByPassing());
button5.addEventListener("click", () => sortByClass());
button6.addEventListener("click", () => sortByGender());
searchInput.addEventListener("input", () => {
  let searchValue = searchInput.value.toLowerCase();
  let filterData = dataInJs.filter((item) =>
    item.first_name.toLowerCase().includes(searchValue),
  );
  renderAllData(filterData);
});
searchBtn.addEventListener("click", () => searchFunc());

function sortAToZ() {
  let sortedArr = [...dataInJs].sort((a, b) =>
    a.first_name.localeCompare(b.first_name),
  );
  renderAllData(sortedArr);
}
function sortZToA() {
  let sortedArr = [...dataInJs].sort((a, b) =>
    b.first_name.localeCompare(a.first_name),
  );
  renderAllData(sortedArr);
}
function sortByMarks() {
  let sortedArr = [...dataInJs].sort((a, b) => a.marks - b.marks);
  renderAllData(sortedArr);
}
function sortByPassing() {
  let sortedArr = dataInJs.filter((item) => item.passing == true);
  renderAllData(sortedArr);
}
function sortByClass() {
  let sortedArr = [...dataInJs].sort((a, b) => a.class - b.class);
  renderAllData(sortedArr);
}
function sortByGender() {
  let sortedArrMale = dataInJs.filter((item) => item.gender == "Male");
  renderAllData(sortedArrMale);
}
function searchFunc() {
  let searchValue = searchInput.value.toLowerCase();
  let filterData = dataInJs.filter((item) =>
    item.first_name.toLowerCase().includes(searchValue),
  );
  renderAllData(filterData);
}

renderAllData(dataInJs);
