const numberKeys =  document.querySelectorAll("div#keys .key.number");
const operatorKeys = document.querySelectorAll("div#keys .key.operator");
const screen = document.querySelector('#frame h2');
const screen1 = document.querySelector('#frame h1');
const cancel = document.querySelector("div#keys .key.cancel")
const back = document.querySelector("div#keys .key.back")


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
        const operators = Array.from(operatorKeys).map(content => content.textContent);
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
    displayvalueh1(operationQueue)
    displayvalue(operationQueue)
})

function displayvalue(array) {
    screen1.textContent = "0";
    screen.textContent = array.join(" ");
}

function displayvalueh1(array){
    screen1.textContent = array[array.length-1]
}