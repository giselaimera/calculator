function addNumber(num1,num2){
    return num1+num2;
}

function subtractNumber(num1,num2){
    return num1-num2;
}

function multiplyNumber(num1,num2){
    return num1*num2;
}

function divideNumber(num1,num2){
    if (num2===0){
        return "Cannot divide by zero!";
    }
    return num1/num2;
}
function remainderNumber(num1,num2){
    return num1%num2;
}

function operate(num1,num2,operator){
    switch(operator){
        case "+":
            return addNumber(num1,num2);
        case "-":
            return subtractNumber(num1,num2);
        case "/":
            return divideNumber(num1,num2);
        case "*":
            return multiplyNumber(num1,num2);
        case "%":
            return remainderNumber(num1,num2);
        
    }
}
function updateDisplay(value){
    const display=document.querySelector(".result");
    display.textContent=value;
}
let operators=document.querySelectorAll(".operator");
const operator_list=[...operators];
let numbers=document.querySelectorAll(".number");
const number_list=[...numbers];
let num1="";
let num2="";
let operator="";
let result="";
number_list.forEach((number)=>{
number.addEventListener("click",()=>{
    const clickedNumber=number.textContent;
    if (operator===""){
        num1+=clickedNumber;
        updateDisplay(num1);
    }
    else{
        num2+=clickedNumber;
        updateDisplay(num2);

    }
});
});

operator_list.forEach((operatorBtn)=>{
operatorBtn.addEventListener("click",()=>{
    const clickedOperator=operatorBtn.textContent;
    if(clickedOperator==="="){
        if (num1!="" && num2!=""){
            result=operate(parseFloat(num1),parseFloat(num2),operator);
            updateDisplay(result);
            num1=result;
            num2="";
            operator="";
        }
    }
    else if(clickedOperator==="C"){
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
            updateDisplay("0"); 
    }
    else{
    operator=clickedOperator;
    updateDisplay(clickedOperator);
    }
});
});



