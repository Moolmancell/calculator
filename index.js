const numberKeys =  document.querySelectorAll("div#keys .key.number");
const operatorKeys = document.querySelectorAll("div#keys .key.operator");
const screen = document.querySelector('#frame h2');
const screen1 = document.querySelector('#frame h1');
const cancel = document.querySelector("div#keys .key.cancel")
const back = document.querySelector("div#keys .key.back")
<<<<<<< HEAD
const equal = document.querySelector("div#keys .key.equal")
=======

>>>>>>> 5bf8dcdcd7233eedc7df17c9b002b7ce86b7e0aa

let operationQueue = [""]

numberKeys.forEach(key => {
    key.addEventListener("click", () => {
        if (key.textContent === ".") {
            if (!operationQueue[operationQueue.length-1].includes(".") && 
                operationQueue[operationQueue.length-1] === "") {
                    operationQueue[operationQueue.length-1]=operationQueue[operationQueue.length-1] + "0."  
                    displayvalueh1(operationQueue)
                }
           else if (!operationQueue[operationQueue.length-1].includes(".")) {
            operationQueue[operationQueue.length-1]=operationQueue[operationQueue.length-1] + key.textContent 
            displayvalueh1(operationQueue)
           }
        } else {
            operationQueue[operationQueue.length-1]=operationQueue[operationQueue.length-1] + key.textContent
            displayvalueh1(operationQueue)
        }
    })  
});
operatorKeys.forEach(key => {
    key.addEventListener("click", () => {
<<<<<<< HEAD
        const operators = Array.from(operatorKeys).map(content => content.textContent); /* might use later*/
=======
        const operators = Array.from(operatorKeys).map(content => content.textContent);
>>>>>>> 5bf8dcdcd7233eedc7df17c9b002b7ce86b7e0aa
        operators.push("")
        if (!operators.includes(operationQueue[operationQueue.length-1])){
            operationQueue.push(key.textContent, "")
            displayvalueh1(operationQueue)
            displayvalue(operationQueue)
        }
    })
});

cancel.addEventListener("click", () => {
    operationQueue = [""]
<<<<<<< HEAD
    screen1.textContent = "0";
    screen.textContent = "";
})

back.addEventListener("click", () => {
    operationQueue[operationQueue.length-1] = operationQueue[operationQueue.length-1].slice(0,-1);
    displayvalueh1(operationQueue);
})

equal.addEventListener("click", () => {
    if (operationQueue[operationQueue.length-1] === ""){
        operationQueue.splice(operationQueue.length-2, 2)
     }
    const stringValue = operationQueue.join(" ")
    screen.textContent = stringValue + " ="
    while (operationQueue.length !== 1) {
        for (let i = 0; i < operationQueue.length-1; i++) {
            if (operationQueue[i] === "x") {
                const answer =  +operationQueue[i-1] * +operationQueue[i+1];
                operationQueue.splice(i-1, 3, answer.toString())
            }
            else if (operationQueue[i] === "/") {
                const answer =  +operationQueue[i-1] / +operationQueue[i+1];
                operationQueue.splice(i-1, 3, answer.toString())
            }
            else if (operationQueue[i] === "+" && !operationQueue.includes("x") && !operationQueue.includes("/")) {
                const answer =  +operationQueue[i-1] + +operationQueue[i+1];
                operationQueue.splice(i-1, 3, answer.toString())
            }
            else if (operationQueue[i] === "-" && !operationQueue.includes("x") && !operationQueue.includes("/")) {
                const answer =  +operationQueue[i-1] - +operationQueue[i+1];
                operationQueue.splice(i-1, 3, answer.toString())
            }
            
        }
    }
    displayvalueh1(operationQueue);
})

function displayvalue(array) {
    if (array[array.length-3][array[array.length-3].length-1] === ".") {
        array[array.length-3] = array[array.length-3].replace(".", "")
    }
    const stringValue = array.join(" ")
    screen1.textContent = "0";
    screen.textContent = stringValue;
=======
    displayvalueh1(operationQueue)
    displayvalue(operationQueue)
})

function displayvalue(array) {
    screen1.textContent = "0";
    screen.textContent = array.join(" ");
>>>>>>> 5bf8dcdcd7233eedc7df17c9b002b7ce86b7e0aa
}

function displayvalueh1(array){
    screen1.textContent = array[array.length-1]
<<<<<<< HEAD
}
=======
}
>>>>>>> 5bf8dcdcd7233eedc7df17c9b002b7ce86b7e0aa
