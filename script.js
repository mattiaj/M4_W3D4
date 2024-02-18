const endPoint = "https://jsonplaceholder.typicode.com/users"
const tableContainer = document.getElementById('container-table');
let mySelect = document.getElementById('my-select');
const inputSearch = document.getElementById('search-input');
let userSearch = [];
// funzione async per ricevere dati
async function getResult () {
    try {
        const res = await fetch(`${endPoint}`);
        const json = await res.json();
        research(json)
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
        createTemplete(ele);
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
    tableContainer.appendChild(tbody);
    console.log(tbody);
}

// funzione per la ricerca
function research (json) {
    const inputValue = inputSearch.value.trim().toLowerCase();
    const selectValue = mySelect.value.toLowerCase();

    if(inputValue === "") {
        return cycleResult(json);
    }
    let filter = userSearch.filter((ele) => {
        return ele[selectValue.toLowerCase()].toLowerCase().includes(inputValue.trim().toLowerCase());
    })
    cycleResult(filter)
}