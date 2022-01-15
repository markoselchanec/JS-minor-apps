let inField = document.getElementById("in");
let btn = document.getElementById("btn");
let outField = document.getElementById("result");

let inValue
let oneDigit = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
let twoDigit = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
let twoDigitTwo = ["","","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"]
let highNumber = ["hundred","thousand","million","billion","trillion"]

let oneToTen;
let tenToTwenty;
let twentyToHundred;
let hundredToThousand;
let thousandToMillion;

btn.addEventListener("click", function() {
    inValue = parseInt(inField.value);

    oneToTen = oneDigit[inValue]
    tenToTwenty = twoDigit[inValue - 10]
    twentyToHundred = `${twoDigitTwo[Math.floor(inValue / 10)]} ${oneDigit[inValue % 10]}`
    hundredToThousand = `${oneDigit[Math.floor(inValue / 100) % 10]} ${highNumber[0]} ${twoDigitTwo[Math.floor((inValue / 10) % 10)]} ${oneDigit[inValue % 10]}`


    if (inField.value < 1 && inField.value > -1) {
        outField.innerHTML = "Zero"
    } else if (inField.value < 10) {
        outField.innerHTML = oneToTen
    } else if (inField.value < 20) {
        outField.innerHTML = tenToTwenty
    } else if (inField.value >= 20 && inField.value < 100) {
        outField.innerHTML = twentyToHundred
    } else if (inField.value >= 100 && inField.value < 1000) {
        outField.innerHTML = hundredToThousand
    } else if (inField.value >= 1000 && inField.value < 10000) {
        outField.innerHTML = `${oneDigit[Math.floor(inValue / 1000) % 10]} ${highNumber[1]} ${hundredToThousand}`
    }
});



