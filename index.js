
const people = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(`Thank you, ${people[i]} for the wonderful birthday gift!`);
    debugger;
  }

}
writeCards();








function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
      console.log(countdown);
      countdown--;
      debugger;
    } 
}
 countDown(10);


