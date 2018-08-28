let arrayTable2Head = ['Name', 'Number of Missed Votes', 'Percent Missed Votes'];
//Display Table 1 Row 2 - ATTENDANCE
displayHeadTable2(arrayTable2Head,table1);
memberData.sort(function(a, b){return a.missed_votes - b.missed_votes});
getTenPercentArray(topEngaged,memberData);
displaySecondRowTable2(topEngaged,table1);
//Display Table 2 Row 2 - ATTENDANCE
displayHeadTable2(arrayTable2Head,table2);
memberData.sort(function(a, b){return b.missed_votes - a.missed_votes});
getTenPercentArray(bottomEngaged,memberData);
displaySecondRowTable2(bottomEngaged,table2);
