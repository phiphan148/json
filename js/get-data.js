// document.getElementById("mem-data").innerHTML = JSON.stringify(data,null,2);
let memberData = data.results[0].members;
let table = document.getElementById("mem-data");

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

//Remove body of the table
function removeOldTbody() {
    let tbodyArray = Array.from(table.getElementsByTagName('tbody'));
    tbodyArray.forEach((oneTBody) => table.removeChild(oneTBody));
}


//Create body Table
function createTbodyOfTable(i, tbody) {
    console.log('add row');
    let fullname = (memberData[i].first_name + ' ' + memberData[i].middle_name + ' ' + memberData[i].last_name).link(memberData[i].url);
    let bodyArray = [fullname, memberData[i].party, memberData[i].state, memberData[i].seniority, memberData[i].votes_with_party_pct + '%'];
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
    for (let i = 0; i < memberData.length; i++) {
        createTbodyOfTable(i, tbody, memberData);
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
displayStateList(memberData);

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
    let arrayClick = document.querySelector('.select-states');
    let value = arrayClick[arrayClick.selectedIndex].value;
    arrayOption.push(value);

    let tbody = table.createTBody('tbody');

    if (array.length != 0 && arrayOption == "") {
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < memberData.length; i++) {
                if (memberData[i].party === array[k]) {
                    createTbodyOfTable(i, tbody);
                }
            }
        }
    } else if (array.length != 0 && arrayOption != "") {
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < memberData.length; i++) {
                if (memberData[i].party === array[k] && memberData[i].state == value) {
                    createTbodyOfTable(i, tbody);
                }
            }
        }
    } else if (array.length == 0 && arrayOption != "") {
        for (let i = 0; i < memberData.length; i++) {
            if (memberData[i].state == value) {
                createTbodyOfTable(i, tbody);
            }
        }
    } else {
        getDataSenate();
    }
}
filterData();