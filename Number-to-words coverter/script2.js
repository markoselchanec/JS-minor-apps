let inField = document.getElementById("in");
let btn = document.getElementById("btn");
let outField = document.getElementById("result");

let oneTwenty = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
let secondDigit= ["","","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"];

btn.addEventListener("click", function() {
    let number = inField.value;
    convert(number)
})

function convert(num) {
    if (num < 1 && num > -1) {
        outField.textContent = "Zero"
    } else if (num < 20) {
        outField.textContent = oneTwenty[num]
    } else if (num < 100) {
        outField.textContent = `${secondDigit[Math.floor(num / 10)]} ${oneTwenty[num % 10]}`
    } else if (num < 1000) {
        outField.textContent = `${oneTwenty[Math.floor(num / 100)] } Hundred ${secondDigit[Math.floor((num / 10) % 10)]} ${oneTwenty[stu(num)]}`
    } else if (num < 10000) {
        outField.textContent = `${oneTwenty[Math.floor(num / 1000)]} Thousand ${oneTwenty[Math.floor(num / 100) - 10] } Hundred ${secondDigit[Math.floor((num / 10) % 10)]} ${oneTwenty[stu(num)]}`
    } else if (num < 100000) {
        outField.textContent = `${stu2(num)} Thousand ${oneTwenty[Math.floor((num % 1000) / 100)] } Hundred ${secondDigit[Math.floor((num / 10) % 10)]} ${oneTwenty[stu(num)]}`
    } else if (num < 1000000) {
        outField.textContent = `${oneTwenty[Math.floor(num / 100000)] } Hundred ${stu3(num)} Thousand ${oneTwenty[Math.floor((num % 1000) / 100)] } Hundred ${secondDigit[Math.floor((num / 10) % 10)]} ${oneTwenty[stu(num)]}`
    } else if (num < 10000000) {
        outField.textContent = `${oneTwenty[Math.floor(num / 1000000)]} Million ${oneTwenty[Math.floor((num / 100000) % 10)] } Hundred ${stu4(num)} Thousand ${oneTwenty[stu(num)]} ${oneTwenty[Math.floor((num / 100) % 10)] } Hundred ${secondDigit[Math.floor((num / 10) % 10)]} ${oneTwenty[stu(num)]}`
    } else if (num < 100000000) {
        // One hundred million
        outField.textContent = `${stu5(num)} Million ${oneTwenty[Math.floor(num / 100000 % 10)]} Hundred ${stu6(num)} Thousand ${oneTwenty[Math.floor(num / 100 % 10)]} Hundred ${stu7(num)}`
    } else if (num < 1000000000) {
        // One billion
        outField.textContent = `${oneTwenty[Math.floor(num / 100000000)]} Hundred ${stu8(num)} Million ${oneTwenty[Math.floor(num / 100000 % 10)]} Hundred ${stu9(num)} Thousand ${oneTwenty[Math.floor(num / 100 % 10)]} Hundred ${stu10(num)}`
    } else if (num < 10000000000) {
        // 10 Billion
        outField.textContent = `${oneTwenty[Math.floor(num / 1000000000)]} Billion ${oneTwenty[Math.floor(num / 100000000 % 10)]} Hundred ${stu11(num)} Million ${oneTwenty[Math.floor(num / 100000 % 10)]} Hundred ${stu12(num)} Thousand ${oneTwenty[Math.floor(num / 100 % 10)]} Hundred ${stu13(num)}`
    } else if (num < 100000000000) {
        // 100 Billion
        outField.textContent = `${stu14(num)} Billion ${oneTwenty[Math.floor(num / 100000000 % 10)]} Hundred ${stu15(num)} Million ${oneTwenty[Math.floor(num / 100000 % 10)]} Hundred ${stu16(num)} Thousand ${oneTwenty[Math.floor(num / 100 % 10)]} Hundred ${stu13(num)}`
    } else if (num < 1000000000000) {
        // 1 Trillion
        outField.textContent = `${oneTwenty[Math.floor(num / 100000000000)]} Hundred ${stu17(num)} Billion ${oneTwenty[Math.floor(num / 100000000 % 10)]} Hundred ${stu18(num)} Million ${oneTwenty[Math.floor(num / 100000 % 10)]} Hundred ${stu19(num)} Thousand ${oneTwenty[Math.floor(num % 10)]} Hundred ${stu13(num)}`
    } else if (num === 10000000000000) {
        outField.textContent = "One Trillion"
    } else {
        outField.textContent = "Number too high"
    } 
}

function stu(num) {
    if(Math.floor((num / 10) % 10) < 2 && Math.floor((num / 10) % 10) > 0) {
        return num % 10 + 10
    } 
    return num % 10
}
function stu2(num) {
    if(Math.floor(num / 1000) < 20) {
        return oneTwenty[Math.floor(num / 1000)]
    } else {
        return secondDigit[Math.floor(num / 10000)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
}
function stu3(num) {
    if (Math.floor((num / 1000) % 100) < 20) {
        return oneTwenty[Math.floor((num / 1000) % 100)]
    } else {

    } return secondDigit[Math.floor(num / 10000) % 10] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
}
function stu4(num) {
    if (Math.floor((num / 1000) % 100) < 20) {
        return oneTwenty[Math.floor((num / 1000) % 100)]
    } else {
        return secondDigit[Math.floor((num / 10000) % 10)] + " " + oneTwenty[Math.floor(num / 1000) % 10]
    }
}
function stu5(num) {
    if (Math.floor(num / 1000000) < 20) {
        return oneTwenty[Math.floor(num / 1000000)]
    } else {
        return secondDigit[Math.floor(num / 10000000)] + " " + oneTwenty[Math.floor((num / 1000000) % 10)]
    }
}
function stu6(num) {
    if (Math.floor(num / 1000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000 % 10)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
}
function stu7(num) {
    if (Math.floor(num % 100) < 20) {
        return oneTwenty[Math.floor(num % 100)]
    } else {
        return secondDigit[Math.floor(num / 10 % 10)] + " " + oneTwenty[Math.floor(num % 10)]
    }
}
function stu8(num) {
    if (Math.floor(num / 1000000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000000 % 10)] + " " + oneTwenty[Math.floor(num / 1000000 % 10)]
    }
}
function stu9(num) {
    if (Math.floor(num / 1000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000 % 10)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
} 
function stu10(num) {
    if (num % 100 < 20) {
        return oneTwenty[Math.floor(num % 100)];
    } else {
        return secondDigit[Math.floor(num / 10 % 10)] + " " + oneTwenty[Math.floor(num % 10)]
    }
}
function stu11(num) {
    if (Math.floor(num / 1000000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000000 % 10)] + " " + oneTwenty[Math.floor(num / 1000000 % 10)]
    }
}
function stu12(num) {
    if (Math.floor(num / 1000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000 % 100)];
    } else {
        return secondDigit[Math.floor(num / 10000 % 10)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
}
function stu13(num) {
    if (num % 100 < 20) {
        return oneTwenty[num % 100] 
    } else {
        return secondDigit[Math.floor(num / 10 % 10)] + " " + oneTwenty[Math.floor(num % 10)]
    }
}
function stu14(num) {
    if (Math.floor(num / 1000000000) < 20) {
        return oneTwenty[Math.floor(num / 1000000000)]
    } else {
        return secondDigit[Math.floor(num / 10000000000)] + " " + oneTwenty[Math.floor(num / 1000000000 % 10)]
    }
}
function stu15(num) {
    if (Math.floor(num / 1000000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000000 % 100)] 
    } else {
        return secondDigit[Math.floor(num / 10000000 % 10)] + " " + oneTwenty[Math.floor(num / 1000000 % 10)]
    }
}
function stu16(num) {
    if (Math.floor(num / 1000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000 % 10)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
}
function stu17(num) {
    if (Math.floor(num / 1000000000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000000000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000000000 % 10)] + " " + oneTwenty[Math.floor(num / 1000000000 % 10)]
    }
}  
function stu18(num) {
    if (Math.floor(num / 1000000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000000 % 10)] + " " + oneTwenty[Math.floor(num / 1000000 % 10)]
    }
}
function stu19(num) {
    if (Math.floor(num / 1000 % 100) < 20) {
        return oneTwenty[Math.floor(num / 1000 % 100)]
    } else {
        return secondDigit[Math.floor(num / 10000 % 10)] + " " + oneTwenty[Math.floor(num / 1000 % 10)]
    }
}
