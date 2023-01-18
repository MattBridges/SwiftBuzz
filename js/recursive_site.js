//Global Variables
let recursiveSwiftBuzzArray = [];

//Get the input values.
function GetValuesRecursive() {
  //Get the user inputs from the page and parse them into numbers
  let swiftValue = parseInt(document.getElementById('swiftValue').value);
  let buzzValue = parseInt(document.getElementById('buzzValue').value);
  let stopValue = parseInt(document.getElementById('stopValue').value);

//Check to make sure only numbers were entered
if (Number.isInteger(swiftValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
  if(stopValue>5000){
    //If the stop value is larger than 5000 to protect the page from crashing 
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Stop Value should be less than 5000'
    });
    }
    else if(swiftValue==0||buzzValue==0){
    //Make sure the user didnt enter a 0 value for swift or buzz
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Swift and Buzz values cannot be 0'
    });
    }
    else{
       //If all are numbers Generate FizzBuzz then display it.
    let possibleValues = GenerateFizzBuzzDry(swiftValue, buzzValue, stopValue);
    DisplayFizzBuzz(possibleValues);
    }
}
else 
    {
      //If they are not, tell the user
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Only integers are allowed for SwiftBuzz'
      });
    }


}

//Generate the SwiftBuzz using recursion.
function GenerateFizzBuzzRecursively(swiftValue, buzzValue, stopValue) {
    
  if (stopValue % (swiftValue * buzzValue) == 0) {
    //Put Fizz Buzz Result Here
    recursiveSwiftBuzzArray.push('SwiftBuzz');
  }
  else if (stopValue % swiftValue == 0) {
    //Put Swift Result Here
    recursiveSwiftBuzzArray.push('Swift');
  }
  else if (stopValue % buzzValue == 0) {
    //Put Buzz Result Here
    recursiveSwiftBuzzArray.push('Buzz');
  }
  else {
    //Put Plain Number Here
    recursiveSwiftBuzzArray.push(stopValue);
  }    

  if(stopValue>0){
    GenerateFizzBuzzRecursively(swiftValue,buzzValue,stopValue-=1);
  }
}