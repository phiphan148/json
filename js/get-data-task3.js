var data;

var dataStatisticsByVue = new Vue({
    el: '#statistics',
    data: {
        glanceStatistics: {},
    }
});

onload = (function () {
    let pathSenate = 'senate';
    let url = '';
    let currentPage = window.location.href;
    let typeSenator = 'attendance';
    if (currentPage.includes(pathSenate)) {
        url = 'https://api.myjson.com/bins/1eja30';

    } else {
        url = 'https://api.myjson.com/bins/j83do';
    }
    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            data = jsonData;
            let memberData = data.results[0].members;
            let table1 = document.querySelector('.top');
            let table2 = document.querySelector('.least');
            let topEngaged = [];
            let bottomEngaged = [];
            if (currentPage.includes(typeSenator)) {
                attendance(table1, table2, memberData, topEngaged, bottomEngaged)
            } else {
                loyalty(table1, table2, memberData, topEngaged, bottomEngaged)
            }
            var statistics = {
                Democrats: 0,
                Republicants: 0,
                Independents: 0,
                Total: 0,
                DemocratsPct: 0,
                RepublicantsPct: 0,
                IndependentsPct: 0,
                TotalPct: 0,
            };
            myFunction(memberData, statistics);
            dataStatisticsByVue.glanceStatistics = statistics;
        });
})

//Functions will be loaded first
function myFunction(memberData, statistics) {
    displayGlance();
    getNumberOfEachPartyVue(memberData, statistics);
}

//Calculate the information of each Party
function getNumberOfEachPartyVue(memberData, statistics) {
    memberData.forEach(element => {
        if (element.party === 'D') {
            statistics.Democrats += 1;
            statistics.DemocratsPct += element.votes_with_party_pct;
        } else if (element.party === 'R') {
            statistics.Republicants += 1;
            statistics.RepublicantsPct += element.votes_with_party_pct;
        } else {
            statistics.Independents += 1;
            statistics.IndependentsPct += element.votes_with_party_pct;
        }
    }
    )
    statistics.Total = statistics.Democrats + statistics.Republicants + statistics.Independents;
    statistics.TotalPct = + Number.parseFloat((statistics.DemocratsPct + statistics.RepublicantsPct + statistics.IndependentsPct) / statistics.Total).toFixed(2);
    statistics.DemocratsPct = + Number.parseFloat(statistics.DemocratsPct / statistics.Democrats).toFixed(2);
    statistics.RepublicantsPct = + Number.parseFloat(statistics.RepublicantsPct / statistics.Republicants).toFixed(2);
    statistics.IndependentsPct = + Number.parseFloat(statistics.IndependentsPct / statistics.Independents).toFixed(2);
    if (statistics.Democrats != 0 && statistics.Republicants != 0 && statistics.Independents != 0) {
    }
    else {
        statistics.IndependentsPct = 0;
    }
}

//Display Header of first table --> Senate/House at a glance
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
}

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

//Call all function for ATTENDANCE
function attendance(table1, table2, memberData, topEngaged, bottomEngaged) {
    let arrayTable2Head = ['Name', 'Number of Missed Votes', 'Percent Missed Votes'];
    //Display Table 1 Row 2 - ATTENDANCE
    displayHeadTable2(arrayTable2Head, table1);
    memberData.sort(function (a, b) { return a.missed_votes - b.missed_votes });
    getTenPercentArray(topEngaged, memberData);
    displaySecondRowTable2(topEngaged, table1);
    //Display Table 2 Row 2 - ATTENDANCE
    displayHeadTable2(arrayTable2Head, table2);
    memberData.sort(function (a, b) { return b.missed_votes - a.missed_votes });
    getTenPercentArray(bottomEngaged, memberData);
    displaySecondRowTable2(bottomEngaged, table2);
}

//Call all function for LOYALTY
function loyalty(table1, table2, memberData, topEngaged, bottomEngaged) {
    let arrayTable2Head = ['Name', 'Number of Party Votes', 'Percent Party Votes'];
    ////Display Table 1 Row 2 - LOYALTY
    displayHeadTable2(arrayTable2Head, table1);
    memberData.sort(function (a, b) { return b.votes_with_party_pct - a.votes_with_party_pct });
    getTenPercentArray(topEngaged, memberData);
    displaySecondRowTable(topEngaged, table1);
    //Display Table 2 Row 2 - LOYALTY
    displayHeadTable2(arrayTable2Head, table2);
    memberData.sort(function (a, b) { return a.votes_with_party_pct - b.votes_with_party_pct });
    getTenPercentArray(bottomEngaged, memberData);
    displaySecondRowTable(bottomEngaged, table2);
}