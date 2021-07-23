

function writeCards(myPeople, gift) {
  let messages = []
  for (let i = 0; i < myPeople.length; i++) {
    messages.push( `Thank you, ${myPeople[i]}, for the wonderful ${gift} gift!`)
    
  }
    return messages 

}








function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
      console.log(countdown);
      countdown--;
   
    } 
}


