// Leticia Martinez  04/21/1969.

document.getElementById("calculate-button").addEventListener
("click", function () {
    const number = parseFloat(document.getElementById("num")
    .value);
    //in this section I used for loop
    let additionResult = '';
    for (let i = 1; i <= 10; i++) {
        additionResult += `${number} + ${i} = ${number + i}<br>`;
    }
   //in this section I used  while loop
    let subtractionResult = '';
    let i = 1; 
    while (i <= 10) {
        subtractionResult += `${number} - ${i} = ${number - i}<br>`;
        i++; 
    }
     //Here using do, while loop
    let multiplicationResult = '';
    let j = 1; 
    do {
    multiplicationResult += `${number} * ${j} = ${number * j}<br>`;
     j++; 
    } while (j <= 10);

   let divisionResult = '';
    for (let k = 1; k <= 10; k++) {
        divisionResult += `${number} ÷ ${k} = ${(number / k).toFixed(2)}<br>`;
    }
 document.getElementById("addition").innerHTML = additionResult;
 document.getElementById("subtraction").innerHTML = subtractionResult;
    document.getElementById("multiplication").innerHTML = multiplicationResult;
    document.getElementById("division").innerHTML = divisionResult;
});
