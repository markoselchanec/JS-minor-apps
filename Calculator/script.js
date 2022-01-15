// Numbers
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
// Operators
let plus = document.getElementById('add')
let equals = document.getElementById('equals')
let minus = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let removeLast = document.getElementById('erase')
let removeAll = document.getElementById('c')
let square = document.getElementById('sqr')
// Displays
let display1 = document.getElementById('display-1');
let display2 = document.getElementById('display-2');
// Random
let operatorStorage = '';
let dot = document.getElementById('dot')
let reverse = document.getElementById('negate')


// Numer buttons
one.addEventListener('click', oneFunc);
function oneFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 1);
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

two.addEventListener('click', twoFunc);
function twoFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 2)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

three.addEventListener('click', threeFunc);
function threeFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 3)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

four.addEventListener('click', fourFunc);
function fourFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 4)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

five.addEventListener('click', fiveFunc);
function fiveFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 5)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

six.addEventListener('click', sixFunc);
function sixFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 6)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

seven.addEventListener('click', sevenFunc);
function sevenFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 7)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

eight.addEventListener('click', eightFunc);
function eightFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 8)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

nine.addEventListener('click', nineFunc);
function nineFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 9)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

zero.addEventListener('click', zeroFunc);
function zeroFunc() {
    if(display1.innerHTML.length <= 9) {
        parseInt(display1.innerHTML += 0)
    }
    if(display1.innerHTML.length > 9) {
        display2.innerHTML = "MAX";
    }
}

dot.addEventListener('click', dotFunc);
function dotFunc() {
    if(display1.innerHTML.toString().charAt(0) == "") {
        parseInt(display1.innerHTML += "0.")
    }
    if(display1.innerHTML.length <= 8 && !display1.innerHTML.toString().includes(".")) {
        parseInt(display1.innerHTML += ".")
    }
}

//Generic operation 

function genericOperation(operation) {
    if(display2.innerHTML.length > 0 && display1.innerHTML !== "") {
        display2.innerHTML = operation; 
        display1.innerHTML = ''
    }else if (display1.innerHTML === ""){} 
    else {
        display2.innerHTML = display1.innerHTML
        display1.innerHTML = ''
    } 
}

function storageFunction(operatorStorage) {
    if(operatorStorage === "/") {
        genericOperation(parseFloat(display2.innerHTML) / parseFloat(display1.innerHTML))
    }
    if(operatorStorage === "-") {
        genericOperation(parseFloat(display2.innerHTML) - parseFloat(display1.innerHTML))
    }
    if(operatorStorage === "*") {
        genericOperation(parseFloat(display2.innerHTML) * parseFloat(display1.innerHTML))
    }
    if(operatorStorage === "+") {
        genericOperation(parseFloat(display2.innerHTML) + parseFloat(display1.innerHTML))
    }
}

// PLUS

plus.addEventListener('click', plusFunc);

function plusFunc() {
    storageFunction(operatorStorage)
    if(operatorStorage === "") {
        operatorStorage = '+'
        storageFunction(operatorStorage)
    }
    operatorStorage = '+'
}
// MINUS

minus.addEventListener('click', minusFunc);

function minusFunc() {
    storageFunction(operatorStorage)
    if(operatorStorage === "") {
        operatorStorage = '-'
        storageFunction(operatorStorage)
    }
    operatorStorage = '-'
}

// MULTIPLY

multiply.addEventListener('click', multiplyFunc);

function multiplyFunc() {
    storageFunction(operatorStorage)
    if(operatorStorage === "") {
        operatorStorage = '*'
        storageFunction(operatorStorage)
    }
    operatorStorage = '*'
}

// DIVIDE

divide.addEventListener('click', divideFunc);

function divideFunc() {
    storageFunction(operatorStorage)
    if(operatorStorage === "") {
        operatorStorage = '/'
        storageFunction(operatorStorage)
    }
    operatorStorage = '/'
}

// SQUARE

square.addEventListener('click', squareFunc);

function squareFunc() {
    if(display1.innerHTML.includes(".")) {
        display1.innerHTML = parseFloat(display1.innerHTML * display1.innerHTML).toFixed(7);
    } else if(display1.innerHTML.length >= 9) {
        display2.innerHTML = "TOO LONG";
    } else if (display1.innerHTML.length < 9 && display1.innerHTML !== "TOO LONG"){
        display1.innerHTML = display1.innerHTML * display1.innerHTML;
    } 
        
}

// REVERSE

reverse.addEventListener('click', reverseFunc);

function reverseFunc() {
    if (display1.innerHTML) {
        display1.innerHTML = - display1.innerHTML
    } 
}

// REMOVE LAST

removeLast.addEventListener('click', removeLastFunc);

function removeLastFunc() {
    if (display1.innerHTML > 9) {
        let remove = display1.innerHTML / 10
        display1.innerHTML = Math.floor(remove)
    }
    if(display1.innerHTML.length <= 9) {
        display2.innerHTML = "";
    }
}

// REMOVE ALL

removeAll.addEventListener('click', removeAllFunc);

function removeAllFunc() {
    display1.innerHTML = ''
    display2.innerHTML = ''
}

// EQUALS

equals.addEventListener('click', equalsFunc);

function equalsFunc() {
    let store;
    if (operatorStorage === '+') {
        store = parseFloat(display1.innerHTML) + parseFloat(display2.innerHTML)
        if(!Number.isNaN(store)) {
            display1.innerHTML = store
            display2.innerHTML = ''
        }
    } else if (operatorStorage === '-') {
        store = parseFloat(display2.innerHTML) - parseFloat(display1.innerHTML)
        if(!Number.isNaN(store)) {
            display1.innerHTML = store
            display2.innerHTML = ''
        }
    } else if (operatorStorage === '*') {
        store = parseFloat(display1.innerHTML) * parseFloat(display2.innerHTML)
        if(!Number.isNaN(store)) {
            display1.innerHTML = store
            display2.innerHTML = ''
        }
    } else if (operatorStorage === '/') {
        store = parseFloat(display2.innerHTML) / parseFloat(display1.innerHTML)
        if(!Number.isNaN(store)) {
            display1.innerHTML = store
            display2.innerHTML = ''
        }
    }   
}
