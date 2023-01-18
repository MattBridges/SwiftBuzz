//Get the input values.
function GetValuesTurnary() {
  //Get the user inputs from the page and parse them into numbers
  let swiftValue = parseInt(document.getElementById('swiftValue').value);
  let buzzValue = parseInt(document.getElementById('buzzValue').value);
  let stopValue = parseInt(document.getElementById('stopValue').value);

  //Check to make sure only numbers were entered
  if (Number.isInteger(swiftValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
    //If all are numbers Generate FizzBuzz then display it.
    let possibleValues = GenerateFizzBuzzTernary(swiftValue, buzzValue, stopValue);
    DisplayFizzBuzz(possibleValues);

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

//Generate SwiftBuzz using ternary operators.
function GenerateFizzBuzzTernary(swiftValue, buzzValue, stopValue) {

  let swiftBuzzArray = [];

  for (let i = 0; i <= stopValue; i++) {
    swiftBuzzArray.push(i%(swiftValue*buzzValue)==0?'SwiftBuzz':i%swiftValue==0?'Swift':i%buzzValue==0?'Buzz':i);
  }

  return swiftBuzzArray
}