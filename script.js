let shownExpr = "";
let realExpr = "";

let buttons = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
    document.getElementById("."),
    document.getElementById("eq"),
    document.getElementById("("),
    document.getElementById(")"),
    document.getElementById("CE"),
    document.getElementById("+"),
    document.getElementById("-"),
    document.getElementById("x"),
    document.getElementById("÷")
]

resultLabel = document.getElementById("resultLabel");

function show(shown, real){
    shownExpr += shown;
    realExpr += real;
    resultLabel.value = shownExpr;
}

function deleteExpr(){
    shownExpr = "";
    realExpr = "";    
    resultLabel.value = shownExpr;
}

function evaluate(){
    resultLabel.value = eval(realExpr);
}

for (let button of buttons){
    let text = button.textContent;
    if (text === "="){
        button.onclick = evaluate
    } else if(text === "CE"){
        button.onclick = deleteExpr;
    } else if(text === "x"){
        button.onclick = function(){show(button.textContent, "*")}
    } else if(text === "÷"){
        button.onclick = function(){show(button.textContent, "/")}
    } else{
        button.onclick = function(){show(button.textContent, button.textContent)};
    }
}

function handleKeyPress(event){
    if (event.key === "Enter"){
        evaluate();
    }
}

document.addEventListener("keydown", handleKeyPress);
