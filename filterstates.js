// TEST
console.log(memsenate[1].state);
g = ["jorge", "phi", "josh"];
g.filter(function(data){return data == "jorge";});

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
    list.setAttribute('id','select-states');
    list.setAttribute('onchange','filterData()');
    listSates.appendChild(list);
    for (let i = 0; i < states.length; i++) {
        console.log('add row');
        let statesData = document.createElement('option');
        statesData.className += 'states-list';
        statesData.value = states[i];
        statesData.innerHTML = states[i];
        list.appendChild(statesData);
        list.firstChild.innerHTML = 'Choose state';
        list.firstChild.setAttribute('value','');
        statesData.setAttribute('onclick', "filterData()");
    }
}
displayStateList(getSates());
