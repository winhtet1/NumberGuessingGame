const answer = Math.floor(Math.random()* 10 + 1) ;
let guesses = 0;

document.getElementById("submitBtn").onclick = function(){

    let guess = document.getElementById("guessField").value
    console.log(guess);
    guesses += 1;
    if(answer == guess){
        alert(`Congratulation!! ${guess} is a number. You took ${guesses} times.`);
    } else if (answer < guess){
        alert("Too Large!!");
    } else {
        alert("Too Small!!");
    }
}
console.log(answer); 
