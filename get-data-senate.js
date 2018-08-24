// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
let table = document.getElementById("senate-data");
let memsenate = datasenate.results[0].members;
console.log(memsenate);

// memsenate.filter(function a(data){return data = getDataSenate()});

//Create header of the table
function createThead() {
    let theader = table.createTHead();
    theader.className += "thead-dark";
    let headrow = theader.insertRow(0);
    let headerArray = ['Full Name', 'Party', 'State', 'Seniority', 'Percentage of vote'];
    for (let i = 0; i < headerArray.length; i++) {
        headcell = document.createElement("th");
        headcell.innerHTML = headerArray[i];
        headrow.appendChild(headcell);
    }
}
createThead();

//Create Table
function createTbodyOfTable(i, tbody) {
    console.log('add row');
    let fullname = (memsenate[i].first_name + ' ' + memsenate[i].middle_name + ' ' + memsenate[i].last_name).link(memsenate[i].url);
    let bodyArray = [fullname, memsenate[i].party, memsenate[i].state, memsenate[i].seniority, memsenate[i].votes_with_party_pct + '%'];
    let row = tbody.insertRow();
    for (let j = 0; j < bodyArray.length; j++) {
        let cell = row.insertCell();
        cell.innerHTML = bodyArray[j].replace(null, ' ');
    }
    row.firstChild.firstChild.className += 'text-body';
}

//Create body of the table display all members in senate
function getDataSenate() {
    let tbody = table.createTBody();
    for (let i = 0; i < memsenate.length; i++) {
        createTbodyOfTable(i, tbody);
    }
}
getDataSenate();

//Remove body of the table
function removeOldTbody() {
    let tbodyArray = Array.from(table.getElementsByTagName('tbody'));
    tbodyArray.forEach((oneTBody) => table.removeChild(oneTBody));
}

//Get states from datasemate
function getSates() {
    let states = [];
    for (let i = 0; i < memsenate.length; i++) {
        if (!states.includes(memsenate[i].state)) {
            states.push(memsenate[i].state);
        }
    }
    return states;
}
getSates();

//Display states in Html
function displayStateList(states) {
    let listSates = document.getElementById('senate-states');
    let list = document.createElement('select');
    list.setAttribute('id', 'select-states');
    list.setAttribute('onchange', 'filterData()');
    listSates.appendChild(list);
    for (let i = 0; i < states.length; i++) {
        let statesData = document.createElement('option');
        statesData.value = states[i];
        statesData.innerHTML = states[i];
        list.appendChild(statesData);
        list.firstChild.innerHTML = 'Choose state';
        list.firstChild.setAttribute('value', '');
    }
}
displayStateList(getSates());

//Main function
function filterData() {
    removeOldTbody();
    let array = [];
    let checkedValue = document.getElementsByClassName('checkparty');
    for (let j = 0; j < checkedValue.length; j++) {
        if (checkedValue[j].checked) {
            array.push(checkedValue[j].value);
        }
    }

    let arrayOption = [];
    let arrayClick = document.getElementById('select-states');
    let value = arrayClick[arrayClick.selectedIndex].value;
    arrayOption.push(value);

    let tbody = table.createTBody();

    if (array.length != 0) {
        if (arrayOption == "") {
            for (let k = 0; k < array.length; k++) {
                for (let i = 0; i < memsenate.length; i++) {
                    if (memsenate[i].party === array[k]) {
                        createTbodyOfTable(i, tbody);
                    }
                }
            }
        } else {
            for (let k = 0; k < array.length; k++) {
                for (let i = 0; i < memsenate.length; i++) {
                    if (memsenate[i].party === array[k] && memsenate[i].state == value) {
                        createTbodyOfTable(i, tbody);
                    }
                }
            }
        }
    } else {
        if (arrayOption == "") {
            getDataSenate();
        } else {
            for (let i = 0; i < memsenate.length; i++) {
                if (memsenate[i].state == value) {
                    createTbodyOfTable(i, tbody);
                }
            }
        }
    }
}

// // Test filter
// let filter = {
//     party : "D",
// }
// memsenate = memsenate.filter(function (item) {
//     for (let index in filter) {
//         if (item[index] === undefined || item[index] != filter[index])
//             return false;
//     }
//     return true;
// })
