//Create header of the table
function createThead(table) {
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

//Remove body of the table
function removeOldTbody() {
    let tbodyArray = Array.from(table.getElementsByTagName('tbody'));
    tbodyArray.forEach((oneTBody) => table.removeChild(oneTBody));
}


