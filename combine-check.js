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
    console.log(value);
    arrayOption.push(value);
    console.log(arrayOption);
    let tbody2 = table.createTBody();
    if (array.length != 0) {
        if(arrayClick.selectedIndex==0){
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
    } else { for (let k = 0; k < array.length; k++) {
        for (let i = 0; i < memsenate.length; i++) {
            if (memsenate[i].party === array[k] && memsenate[i].state == value) {
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

    }
    } else if (arrayClick.selectedIndex==0){
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
        } else if (arrayClick.selectedIndex!=0){
            for (let i = 0; i < memsenate.length; i++) {
                if (memsenate[i].state == value) {
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
        } else{
        removeOldTbody();
        getDataSenate();
    }
}