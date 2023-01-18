//Get the input values.
function GetValues() {
  //Get the user inputs from the page and parse them into numbers
  let swiftValue = parseInt(document.getElementById('swiftValue').value);
  let buzzValue = parseInt(document.getElementById('buzzValue').value);
  let stopValue = parseInt(document.getElementById('stopValue').value);

  //Check to make sure only numbers were entered
  if (Number.isInteger(swiftValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
    //If all are numbers Generate FizzBuzz then display it.
    let possibleValues = GenerateFizzBuzz(swiftValue, buzzValue, stopValue);
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

//Generate the FizzBuzz.
function GenerateFizzBuzz(swiftValue, buzzValue, stopValue) {

  let swiftBuzzArray = [];

  for (let i = 0; i <= stopValue; i++) {
    if (i % (swiftValue * buzzValue) == 0) {
      //Put Fizz Buzz Result Here
      swiftBuzzArray.push('SwiftBuzz');
    }
    else if (i % swiftValue == 0) {
      //Put Swift Result Here
      swiftBuzzArray.push('Swift');
    }
    else if (i % buzzValue == 0) {
      //Put Buzz Result Here
      swiftBuzzArray.push('Buzz');
    }
    else {
      //Put Plain Number Here
      swiftBuzzArray.push(i);
    }


  }

  return swiftBuzzArray
}

//Display the result to the screen.
function DisplayFizzBuzz(swiftBuzzArray) {
  let tableBody = document.getElementById('results');
  let tableHTML = "";

  for (let i = 1; i < swiftBuzzArray.length; i++) {
    let value = swiftBuzzArray[i]
    let className = '';

    if (value == 'Swift') {
      className = 'swift';
    }
    else if (value == 'Buzz') {
      className = 'buzz';
    }
    else if (value == 'SwiftBuzz') {
      className = 'swiftBuzz';
    }
    else{
      className='';
    }


    //Force Table to only be 5 columns wide
    if (i-1% 5 == 0) {
      tableHTML += '<tr>'
    }

    //Generate the td html for each result and append it to the existing tableHTML
    let tableData = `<td class="${className}">${value}</td>`
    tableHTML += tableData;

    /*Check if the next index is divisible by 5 and if so 
   close our tr tag on the current row*/
    if ((i) % 5 == 0) {
      tableHTML += '</tr>';
    }


  }
  tableBody.innerHTML = tableHTML;
  recursiveSwiftBuzzArray = [];
  counter = 0;



}
