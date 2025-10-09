/*Never call the function before defining it*/
//Function decloration 
function averageTwoNumbers(firstNum, secondNum){
    return (firstNum + secondNum) / 2;
}

//functions can have more than one step
function averageTwoNumbers(firstNum, secondNum){
    let sum = firstNum + secondNum;
    let avg = sum / 2;
    return avg;
}



// Function Expression (second way to write a function in js)
let averageTwoNumbers = function (firstNum, secondNum) {
    let sum = firstNum + secondNum;
    let avg = sum / 2;
    return avg;
}

//there is also shorhand for anonymous functions
let averageTwoNumbers =  (firstNum, secondNum) => {
    let sum = firstNum + secondNum;
    let avg = sum / 2;
    return avg;
}



// swtich statements
switch (grade) {
    case 'A':
        console.log("You did Great!");
    case 'B':
        console.log("You did good!");
    case 'C':
        console.log('You did okay.');
    case 'D':
        console.log("Well atleast you pass");
    case 'F':
        console.log("You Failed, Better luck next time...");
}
