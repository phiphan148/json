// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
let re = datasenate.results[0].members[0];
console.log(re.id);
let table = document.getElementById("senate-data");
let memsenate = datasenate.results[0].members;
console.log(memsenate.length);

function createThead() {
    let theader = table.createTHead();
    let headrow = theader.insertRow(0);
    let headcell1 = document.createElement("th");
    let headcell2 = document.createElement("th");
    let headcell3 = document.createElement("th");
    let headcell4 = document.createElement("th");
    let headcell5 = document.createElement("th");
    headcell1.innerHTML = 'Full Name';
    headcell2.innerHTML = 'Party';
    headcell3.innerHTML = 'State';
    headcell4.innerHTML = 'Seniority';
    headcell5.innerHTML = 'Percentage of vote';
    headrow.appendChild(headcell1);
    headrow.appendChild(headcell2);
    headrow.appendChild(headcell3);
    headrow.appendChild(headcell4);
    headrow.appendChild(headcell5);
    theader.className += "thead-dark";
}
createThead();

function getDataSenate() {
    let tbody = table.createTBody();
    tbody.setAttribute('id', 'test');
    for (let i = 0; i < memsenate.length; i++) {
        let row = tbody.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let firstname = memsenate[i].first_name;
        let middlename = memsenate[i].middle_name;;
        let lastname = memsenate[i].last_name;
        let fullname = firstname + ' ' + middlename + ' ' + lastname;
        let party = memsenate[i].party;
        let state = memsenate[i].state;
        let seniority = memsenate[i].seniority;
        let percentage_vote = memsenate[i].votes_with_party_pct;
        if (!firstname || !middlename || !lastname || !party || !state || !seniority || !percentage_vote) {
            cell1.innerHTML = fullname.replace(null, ' ').link(memsenate[i].url);
            cell2.innerHTML = party.replace(null, ' ');
            cell3.innerHTML = state.replace(null, ' ');
            cell4.innerHTML = seniority.replace(null, ' ');
            cell5.innerHTML = percentage_vote + '%';
        } else {
            cell1.innerHTML = fullname.link(memsenate[i].url);
            cell2.innerHTML = party;
            cell3.innerHTML = state;
            cell4.innerHTML = seniority;
            cell5.innerHTML = percentage_vote + '%';
        }
    }
}
getDataSenate();

function filterData() {
    removeOldTbody();
    let tbody2 = table.createTBody();
    let array = [];
    let checkedValue = document.getElementsByClassName('checkparty');
    for (let j = 0; j < checkedValue.length; j++) {
        if (checkedValue[j].checked) {
            array.push(checkedValue[j].value);
        }
    }
    if (array.length != 0) {
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < memsenate.length; i++) {
                if (memsenate[i].party === array[k]) {
                    console.log('add row');
                    let row = tbody2.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    let firstname = memsenate[i].first_name;
                    let middlename = memsenate[i].middle_name;;
                    let lastname = memsenate[i].last_name;
                    let fullname = firstname + ' ' + middlename + ' ' + lastname;
                    let party = memsenate[i].party;
                    let state = memsenate[i].state;
                    let seniority = memsenate[i].seniority;
                    let percentage_vote = memsenate[i].votes_with_party_pct;
                    if (!firstname || !middlename || !lastname || !party || !state || !seniority || !percentage_vote) {
                        cell1.innerHTML = fullname.replace(null, ' ').link(memsenate[i].url);
                        cell2.innerHTML = party.replace(null, ' ');
                        cell3.innerHTML = state.replace(null, ' ');
                        cell4.innerHTML = seniority.replace(null, ' ');
                        cell5.innerHTML = percentage_vote + '%';
                    } else {
                        cell1.innerHTML = fullname.link(memsenate[i].url);
                        cell2.innerHTML = party;
                        cell3.innerHTML = state;
                        cell4.innerHTML = seniority;
                        cell5.innerHTML = percentage_vote + '%';
                    }
                }
            }
        }
    } else {
        removeOldTbody();
        getDataSenate();
    }

}
function removeOldTbody() {
    let tbodyArray = Array.from(table.getElementsByTagName('tbody'));
    tbodyArray.forEach((oneTBody) => table.removeChild(oneTBody));
}


