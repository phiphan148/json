function getSates(){
    let states = [];
    for(let i=0; i<memsenate.length; i++){
        if(!states.includes(memsenate[i].state)){
        states.push(memsenate[i].state);
    }
    }
    return states;
}
getSates();

function displayStateList(states){
    let listSates = document.getElementById('senate-states');
    let list = document.createElement('ul');
    listSates.appendChild(list);
    for (let i=0; i<states.length; i++){
        console.log('add row');
        let statesData = document.createElement('li');
        let statesDataTxt = document.createElement('a');
        statesDataTxt.innerHTML = states[i];
        list.appendChild(statesData);
        statesData.appendChild(statesDataTxt);
    }
}
displayStateList(getSates());