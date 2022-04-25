const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//  generise i ispisuje rez. pre operacije, operator, unetu vrednost i 
//  rezultat unete vrednosti i vrednosti pre operacije
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //iz vendor.js
}

//uzima unetu vrednost
function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() { // funkcija za sabiranje
    calculateResult('ADD');
}
function subtract(){ //funkcija za oduzimanje
    calculateResult('SUBTRACT');
}

function multiply(){ //f-ja za mnozenje
   calculateResult('MULTIPLY');
}

function divide(){ //f-ja za deljenje
    calculateResult('DIVIDE');
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    if (calculationType !== 'ADD' &&    //     ovaj deo koda osigurava
    calculationType !== 'SUBTRACT' &&   //     da se operacije izvrse iskljucivo
    calculationType !== 'MULTIPLY' &&   //     ako su u pitanju zadate operacije
    calculationType !== 'DIVIDE' ||
    !enteredNumber // osigurava od unosenja nule, ne dozvoljavajuci bilo kakve operacije sa nulom
    ) {
    return;
    }
    const initialResult = currentResult; //
    let mathOperator;
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/'
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

function writeToLog(operationIdentifier, prevResult,operationNumber,newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);    //upumpava parametre konstante logEntry u niz logEntries[]
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);