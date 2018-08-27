// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
let memHouse = datahouse.results[0].members;
let table = document.getElementById("house-data");

//Create header of the table of Senate data
createThead(table);

//Create body Table
function createTbodyOfTable(i, tbody) {
    console.log('add row');
    let fullname = (memHouse[i].first_name + ' ' + memHouse[i].middle_name + ' ' + memHouse[i].last_name).link(memHouse[i].url);
    let bodyArray = [fullname, memHouse[i].party, memHouse[i].state, memHouse[i].seniority, memHouse[i].votes_with_party_pct + '%'];
    let row = tbody.insertRow();
    for (let j = 0; j < bodyArray.length; j++) {
        let cell = row.insertCell();
        cell.innerHTML = bodyArray[j].replace(null, ' ');
    }
    row.firstChild.firstChild.className += 'text-body';
}

//Create body of the table display all members in senate
function getDataHouse() {
    let tbody = table.createTBody();
    for (let i = 0; i < memHouse.length; i++) {
        createTbodyOfTable(i, tbody, memHouse);
    }
}

//Display state list
function displayStateList(array) {
    let states = [];
    for (let i = 0; i < array.length; i++) {
        if (!states.includes(array[i].state)) {
            states.push(array[i].state);
        }
    }
    let listSates = document.querySelector('.states');
    let list = document.createElement('select');
    list.setAttribute('class', 'select-states');
    list.setAttribute('onchange', 'filterDataHouse()');
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
displayStateList(memHouse);

//Main function
function filterDataHouse() {
    removeOldTbody();
    let array = [];
    let checkedValue = document.getElementsByClassName('checkparty');
    for (let j = 0; j < checkedValue.length; j++) {
        if (checkedValue[j].checked) {
            array.push(checkedValue[j].value);
        }
    }

    let arrayOption = [];
    let arrayClick = document.querySelector('.select-states');
    let value = arrayClick[arrayClick.selectedIndex].value;
    arrayOption.push(value);

    let tbody = table.createTBody('tbody');

    if (array.length != 0 && arrayOption == "") {
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < memHouse.length; i++) {
                if (memHouse[i].party === array[k]) {
                    createTbodyOfTable(i, tbody);
                }
            }
        }
    } else if (array.length != 0 && arrayOption != "") {
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < memHouse.length; i++) {
                if (memHouse[i].party === array[k] && memHouse[i].state == value) {
                    createTbodyOfTable(i, tbody);
                }
            }
        }
    } else if (array.length == 0 && arrayOption != "") {
        for (let i = 0; i < memHouse.length; i++) {
            if (memHouse[i].state == value) {
                createTbodyOfTable(i, tbody);
            }
        }
    } else {
        getDataHouse();
    }
}
filterDataHouse();