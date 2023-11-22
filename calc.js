const numberBtn = document.querySelectorAll('.number');
const deleteBtn = document.querySelector(".delete");
const signsbtn = document.querySelectorAll(".sign");
const clearBtn = document.querySelector(".clear");
const display = document.querySelector('.display');
const equalBtn = document.querySelector(".equal");
let isFirstValue = true;
let isSecondValue = false;
let firstValue = "";
let secondValue = "";
let sign;


for(let i = 0; i < numberBtn.length; i++){
    numberBtn[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute("value");
        if(isFirstValue === true){
            getFirstValue(atr);
        }
        if(isSecondValue === true){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(ReciveFirstValue){
     firstValue += ReciveFirstValue;
     display.value += ReciveFirstValue;
}

function getSecondValue(reciveSecondValue){
    secondValue += reciveSecondValue;
    display.value += reciveSecondValue;
}

function getsingsValue(){
      signsbtn.forEach(function(btn){
        btn.addEventListener('click', (e) => {
            sign = e.target.getAttribute("value");
            display.value += sign;
            isFirstValue = false;
            isSecondValue = true;
        })
      })   
}
getsingsValue();


clearBtn.addEventListener('click', () => {
    isFirstValue = true;
    isSecondValue = false;
    firstValue = "";
    secondValue = "";
    sign = "";
    display.value = "";
})


deleteBtn.addEventListener("click", () => {
    if(isFirstValue){
         firstValue = firstValue.slice(0,-1);
         display.value = firstValue;
    }
    else if(isSecondValue){
          secondValue = secondValue.slice(0,-1);
          display.value = secondValue;
    }
    
})

function calculateResult(){
    equalBtn.addEventListener('click', function(){
        if(firstValue !== "" && secondValue !== ""){
            let getResultValue;
            switch (sign){
                case "+":
              getResultValue = parseFloat(firstValue) + parseFloat(secondValue);
              break;
              case "-":
                getResultValue = parseFloat(firstValue) - parseFloat(secondValue);
                break;

                case "*":
                getResultValue = parseFloat(firstValue) * parseFloat(secondValue);
                break;

                case "/":
                getResultValue = parseFloat(firstValue) / parseFloat(secondValue);
                break;

                case "%":
                getResultValue = parseFloat(firstValue) % parseFloat(secondValue);
                break;
            }

            display.value = getResultValue;
            firstValue = getResultValue.toString();
            
            
        }
    })
}
calculateResult()