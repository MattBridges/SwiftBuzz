//Get the input values.
function GetValuesTurnary() {
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

//Generate SwiftBuzz using ternary operators.
function GenerateFizzBuzzTernary(swiftValue, buzzValue, stopValue) {

  let swiftBuzzArray = [];

  for (let i = 0; i <= stopValue; i++) {
    swiftBuzzArray.push(i%(swiftValue*buzzValue)==0?'SwiftBuzz':i%swiftValue==0?'Swift':i%buzzValue==0?'Buzz':i);
  }

  return swiftBuzzArray
}