let arrayTable2Head = ['Name', 'Number of Party Votes', 'Percent Party Votes'];
////Display Table 1 Row 2 - LOYALTY
displayHeadTable2(arrayTable2Head,table1);
memberData.sort(function(a, b){return b.votes_with_party_pct - a.votes_with_party_pct});
getTenPercentArray(topEngaged,memberData);
displaySecondRowTable(topEngaged,table1);
//Display Table 2 Row 2 - LOYALTY
displayHeadTable2(arrayTable2Head,table2);
memberData.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
getTenPercentArray(bottomEngaged,memberData);
displaySecondRowTable(bottomEngaged,table2);
