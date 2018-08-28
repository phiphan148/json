let memberData = data.results[0].members;
let table1 = document.querySelector('.top');
let table2 = document.querySelector('.least');
let topEngaged = [];
let bottomEngaged = [];
//Declare statistics
var statistics = {
    'glance': [
        { 'Name': 'Democrats', 'Party': 'D', 'Number_of_members': 0, 'Percent_Votes': 0 },
        { 'Name': 'Republicants', 'Party': 'R', 'Number_of_members': 0, 'Percent_Votes': 0 },
        { 'Name': 'Independents', 'Party': 'I', 'Number_of_members': 0, 'Percent_Votes': 0 },
        { 'Name': 'Total', 'Party': '', 'Number_of_members': 0, 'Percent_Votes': 0 }
    ]
}

//Get number of members of each party
function getNumberOfEachParty() {
    memberData.forEach(element => {
        for (let i = 0; i < statistics.glance.length; i++) {
            if (element.party == statistics.glance[i].Party) {
                statistics.glance[i].Number_of_members += 1;
                statistics.glance[i].Percent_Votes += element.votes_with_party_pct;
            }
        }
    })
    let total = [];
    let totalPercentVotes = 0;
    let totalMembers = 0;
    for (let i = 0; i < statistics.glance.length; i++) {
        if (statistics.glance[i].Party != '' && statistics.glance[i].Number_of_members != 0) {
            statistics.glance[i].Percent_Votes = + Number.parseFloat(statistics.glance[i].Percent_Votes / statistics.glance[i].Number_of_members).toFixed(2);
            total.push(statistics.glance[i].Percent_Votes);
            totalPercentVotes += statistics.glance[i].Percent_Votes;
            totalMembers += statistics.glance[i].Number_of_members;
        } else {
            statistics.glance[i].Percent_Votes = 0;
        }
    }
    statistics.glance[3].Number_of_members = totalMembers;
    statistics.glance[3].Percent_Votes = + Number.parseFloat(totalPercentVotes / total.length).toFixed(2);
}
getNumberOfEachParty();

//Display first table --> Senate at a glance
function displayGlance() {
    let senateglance = document.getElementById('glance');
    let arrayHead = ['Party', 'Number of members', 'Percent of Votes'];
    let thead = senateglance.createTHead();
    thead.setAttribute('class', 'thead-dark');
    let headrow = thead.insertRow();
    arrayHead.forEach(item => {
        let headcell = document.createElement('th');
        headcell.innerHTML = item;
        headrow.append(headcell);
    })
    let tbody = senateglance.createTBody();
    statistics.glance.forEach(item => {
        rowbody = tbody.insertRow();
        cell1 = rowbody.insertCell();
        cell1.innerHTML = item.Name;
        cell2 = rowbody.insertCell();
        cell2.innerHTML = item.Number_of_members;
        cell3 = rowbody.insertCell();
        cell3.innerHTML = item.Percent_Votes;
    })
}
displayGlance();

//Get 10% array in general
function getTenPercentArray(array1, array2) {
    for (let i = 0; i < ((array2.length * 10) / 100); i++) {
        array1.push(array2[i]);
    }
}

//Head of 2nd row table
function displayHeadTable2(array, table) {
    let thead = table.createTHead();
    thead.setAttribute('class', 'thead-dark');
    let headrow = thead.insertRow();
    array.forEach(item => {
        let headcell = document.createElement('th');
        headcell.innerHTML = item;
        headrow.append(headcell);
    })
}

//Display Second row table Loyalty
function displaySecondRowTable(array, table) {
    let tbody = table.createTBody();
    array.forEach(mem => {
        let row = tbody.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, ' ');
        let cell2 = row.insertCell();
        cell2.innerHTML = mem.total_votes;
        let cell3 = row.insertCell();
        cell3.innerHTML = mem.votes_with_party_pct;
    })
}

//Display Second row table Attendance
function displaySecondRowTable2(array, table) {
    let tbody = table.createTBody();
    array.forEach(mem => {
        let row = tbody.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = (mem.first_name + ' ' + mem.middle_name + ' ' + mem.last_name).replace(null, ' ');
        let cell2 = row.insertCell();
        cell2.innerHTML = mem.missed_votes;
        let cell3 = row.insertCell();
        cell3.innerHTML = mem.missed_votes_pct;
    })
}
