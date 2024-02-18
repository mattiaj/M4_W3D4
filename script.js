const endPoint = "https://jsonplaceholder.typicode.com/users"
const tableContainer = document.getElementById('container-table');
let mySelect = document.getElementById('my-select');
const inputSearch = document.getElementById('search-input');
let userSearch = [];
let buttonSearch = document.getElementById('btn-search');
// funzione async per ricevere dati
async function getResult () {
    try {
        const res = await fetch(`${endPoint}`);
        const json = await res.json();
        userSearch.push(...json)
        cycleResult(userSearch)
        // console.log(json)
    } catch(err) {
        console.log("err");
    }

}
getResult()
// funzione che mi cicla i risultati
function cycleResult(user) {
    user.forEach(ele => {
        // console.log(ele)
        tableContainer.appendChild(createTemplete(ele));
    });
}
// funzione che crea il body della table
function createTemplete(element) {
  
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.scope = "row";
    th.innerText = element.id
    let tdName = document.createElement('td');
    tdName.innerText = element.name;
    let tdUser = document.createElement('td');
    tdUser.innerText = element.username;
    let tdEmail = document.createElement('td');
    tdEmail.innerText = element.email;

    tbody.appendChild(tr);
    tr.append(th, tdName, tdUser, tdEmail);
    return tr;
}
buttonSearch.addEventListener("click", research);
// funzione per la ricerca
function research () {
    const selectValue = mySelect.value.toLowerCase();
    const inputValue = inputSearch.value.toLowerCase();

    let filter = userSearch.filter(user => {
        return tableContainer.innerHTML = "", user[selectValue].toLowerCase().includes(inputValue.toLowerCase());
    })
    console.log("risultati filtrati:", filter);
    cycleResult(filter);
}

