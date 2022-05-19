var squads = 14;             //parseInt(gets())
var totalMatches = 0;
var sobra = 0;
var numberOfMatches = 0;

while (squads >= 2) {
    if (sobra == 1) {
        squads = squads + 1;
    }
    if (squads % 2 === 1) {
        numberOfMatches = (squads - 1) / 2;
        sobra = 1;
        squads = numberOfMatches;
    } else
        numberOfMatches = squads / 2;
     squads = numberOfMatches;

    totalMatches = totalMatches + numberOfMatches;

}
console.log(totalMatches);






