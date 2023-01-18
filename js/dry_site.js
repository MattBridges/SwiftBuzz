//Get the input values.
function GetValuesDry() {
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

//Generate the FizzBuzz.
function GenerateFizzBuzzDry(swiftValue, buzzValue, stopValue) {

  let swiftBuzzArray = [];

  for (let i = 0; i <= stopValue; i++) {
   swiftBuzzArray.push(GetNumbersSwiftBuzzValue(swiftValue,buzzValue,i));
  }

  return swiftBuzzArray
}

function GetNumbersSwiftBuzzValue(swiftValue, buzzValue, valueToCheck){
  if (valueToCheck % (swiftValue * buzzValue) == 0) {
    //Put Fizz Buzz Result Here
    return 'SwiftBuzz';
  }
  else if (valueToCheck % swiftValue == 0) {
    //Put Swift Result Here
    return 'Swift';
  }
  else if (valueToCheck % buzzValue == 0) {
    //Put Buzz Result Here
    return 'Buzz';
  }
  else {
    //Put Plain Number Here
   return valueToCheck;
  }
}

function DisplayFizzBuzzDry(swiftBuzzArray,swiftValue,buzzValue) {
  let tableBody = document.getElementById('results');
  let tableHTML = "";

  for (let i = 1; i < swiftBuzzArray.length; i++) {
    //HandleNewRowsOpenTag(i);
    tableHTML += HandleNewRowsOpenTag(i)+TableHTMLHandler(swiftBuzzArray[i],swiftValue,buzzValue)+HandleNewRowsClosingTag(i);
    //HandleNewRowsClosingTag(i);
  }
  tableBody.innerHTML = tableHTML;
}

function GetValuesClass(value, swiftValue,buzzValue){
  if (value%swiftValue == 0) {
    return 'swift';
  }
  else if (value%buzzValue == 0) {
    return 'buzz';
  }
  else if (value%(swiftValue*buzzValue) == 0) {
    return 'swiftBuzz';
  }
  else{
    return;
  }
} 

function TableHTMLHandler(valueToCheck,swiftValue,buzzValue){
    //Get the Values Class
    let className = GetValuesClass(valueToCheck,swiftValue,buzzValue);
    //Generate the td html for each result and append it to the existing tableHTML
    let tableData = `<td class="${className}">${valueToCheck}</td>`
    return tableData;
}

function HandleNewRowsOpenTag(index){
  if(((index)-1)%5==0){
    return '<tr>';
  }
  return;
}

function HandleNewRowsClosingTag(index){
  if((index)%5==0){
    return '</tr>';
  }
  return '';
}