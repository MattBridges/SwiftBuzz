//Global Variables
let recursiveSwiftBuzzArray = [];
let counter = 0;

//Get the input values.
function GetValuesRecursive() {
  //Get the user inputs from the page and parse them into numbers
  let swiftValue = parseInt(document.getElementById('swiftValue').value);
  let buzzValue = parseInt(document.getElementById('buzzValue').value);
  let stopValue = parseInt(document.getElementById('stopValue').value);

  //Check to make sure only numbers were entered
  if (Number.isInteger(swiftValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
    //If all are numbers Generate FizzBuzz then display it.
    GenerateFizzBuzzRecursively(swiftValue, buzzValue, stopValue,counter);
    DisplayFizzBuzz(recursiveSwiftBuzzArray);

  }
  else {
    //If they are not, tell the user
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Only integers are allowed for SwiftBuzz'
    });
  }


}

//Generate the SwiftBuzz using recursion.
function GenerateFizzBuzzRecursively(swiftValue, buzzValue, stopValue,count) {
    
  if (count % (swiftValue * buzzValue) == 0) {
    //Put Fizz Buzz Result Here
    recursiveSwiftBuzzArray.push('SwiftBuzz');
  }
  else if (count % swiftValue == 0) {
    //Put Swift Result Here
    recursiveSwiftBuzzArray.push('Swift');
  }
  else if (count % buzzValue == 0) {
    //Put Buzz Result Here
    recursiveSwiftBuzzArray.push('Buzz');
  }
  else {
    //Put Plain Number Here
    recursiveSwiftBuzzArray.push(count);
  }    

  if(count<stopValue){
    GenerateFizzBuzzRecursively(swiftValue,buzzValue,stopValue, count+=1);
  }
}