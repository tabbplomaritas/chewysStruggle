"use strict"

//create an array of questions for us to iterate through
const questions = [
  "On a scale of 1-10, how friendly are you?",
  "On a scale of 1-10, how skilled are you at flying?",
  "On a scale of 1-10, how are you at playing Dejarik at a master level?",
  "On a scale of 1-10, how unafraid are you of the Galactic Empire",
]

//create a function that we use to loop through array questions, accumulating the candidates' score with each question asked. At the end, return the accumlated score.
const friendQuestionaire = (name) => {
  alert(`${name} is the next friend candidate.`)
  let friendScore =0;
  for(let i = 0; i < questions.length; i++){
    let currentQuestion= Number(prompt(questions[i]));

    //check that the user entered a valid number. if they did, they get their points, otherwise, they forfeit points from that question
    if(currentQuestion < 11 && currentQuestion > 0){
    friendScore += currentQuestion;
    }else{
      alert("you did not enter a valid number. Please only enter number 1-10. You get zero points for not following directions. ");
    }
  }
  return friendScore;
}


const candidate1 = friendQuestionaire("Kevin"); 
const candidate2 = friendQuestionaire("Frankie"); 
const candidate3 = friendQuestionaire("Ashley"); 

const candidateScores = [candidate1, candidate2, candidate3];

let winner = Math.max(candidate1, candidate2, candidate3);


if(winner = candidate1){
  console.log("Kevin is Chewy's New Friend");
} else if (winner = candidate2){
  console.log("Frankie is Chewy's New Friend");
}else if (winner = candidate3){
  console.log("Ashley is Chewy's New Friend");
}




// friend1 = 25