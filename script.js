// let poundWeight = 120;
// let feet = 5;
// let inches = 3;
// let gender = 'female';
// let age = 54;
let calories = 0;

let weight = document.getElementById('weight');
let foot = document.getElementById('foot');
let ages = document.getElementById('age');
let inch = document.getElementById('inch');
let sex = document.querySelector("input[name='gender']");
let male = document.getElementById('male');
let female = document.getElementById('female');
let activity = document.querySelector("#activity");
let goal = document.querySelector("#goal");
let submit = document.querySelector("#submit");
let bmrResult = document.querySelector("#result");

let column1 = document.querySelector("#column1");
let column2 = document.querySelector("#column2");
let column3 = document.querySelector("#column3");

var weightNumber = 0;
var weightRate = 0;

weight.addEventListener('input', function(){
    if(isNaN(this.value) || Number(this.value) < 0){
        alert("must be a positive number");
    }
    checkInputs()
});
foot.addEventListener('input', function(){
    if(isNaN(this.value) || Number(this.value) < 0){
        alert("must be a positive number");
    }
    checkInputs()
});
inch.addEventListener('input', function(){
    if(isNaN(this.value) || Number(this.value) < 0 || Number(this.value) >= 12){
        alert("must be a positive number and smaller than 12");
    }
    checkInputs()
});
ages.addEventListener('input', function(){
    if(isNaN(this.value) || Number(this.value) < 0){
        alert("must be a positive number");
    }
    checkInputs();
});
submit.addEventListener('click',function(){
    createPlan();
    
});
sex.addEventListener('click',function(){
    checkInputs();
});
// console.log(sex.value);
function checkInputs(){
    if(!isNaN(ages.value) && !isNaN(foot.value) && !isNaN(inch.value) && !isNaN(weight.value)
     && Number(ages.value) >= 0 && Number(foot.value) >= 0 && Number(inch.value) >= 0 && Number(weight.value) >= 0 && Number(inch.value) < 12
    && ages.value.trim().length && foot.value.trim().length && inch.value.trim().length && weight.value.trim().length &&
    (male.checked || female.checked)){
            submit.disabled = false;
            console.log("button turned on");
    }
    else{
        submit.disabled = true;
        console.log("button turned off");
    }
    console.log(sex.value);
}
function createPlan(){
    column1.innerHTML = '';
    column2.innerHTML = '';
    column3.innerHTML = '';
    weightNumber = Number(weight.value);
    sex = document.querySelector("input[name='gender']:checked");
    let element;
    var i = 1;
    while(i <= 90){
        
        calculateBMR();
        element = document.createElement('p');
        element.textContent = `${i}. ${Math.round(calories)}`;
        if(i <= 30){
            column1.appendChild(element);
        }
        else if(i <= 60){
            column2.appendChild(element);
        }
        else if(i <= 90){
            column3.appendChild(element);
        }
        
        weightNumber += weightRate;
        i++;
    }
}
function calculateBMR(){
    
    let centimeters = ((Number(foot.value) * 12) + Number(inch.value)) * 2.54;
    let kilograms = weightNumber / 2.205;
    if(sex.value === 'male'){
        calories = (10 * kilograms) + (6.25 * centimeters) - (5 * ages.value) + 5;
    }
    else if(sex.value === 'female'){
        calories = (10 * kilograms) + (6.25* centimeters) - (5 * ages.value) - 161;
    }
    bmrResult.textContent = Math.round(calories);
    calories *= Number(activity.value);
    if(goal.value == "a"){
        calories += 1000;
        weightRate = 0.286;
    }
    else if(goal.value == "b"){
        calories += 750;
        weightRate = 0.214;
    }
    else if(goal.value == "c"){
        calories += 500;
        weightRate = 0.143;
    }
    else if(goal.value == "d"){
        calories += 250;
        weightRate = 0.071;
    }
    else if(goal.value == "e"){
        //don't add or take away anyting
    }
    else if(goal.value == "f"){
        calories -= 250;
        weightRate = -0.071;
    }
    else if(goal.value == "g"){
        calories -= 500;
        weightRate = -0.143;
    }
    else if(goal.value == "h"){
        calories -= 750;
        weightRate = -0.214;
    }
    else if(goal.value == "i"){
        calories -= 1000;
        weightRate = -0.286;
    }
    console.log(calories);
    console.log(activity.value)
    
    
    
    
}
checkInputs();
console.log(!isNaN(50));
// calculateBMR();

// Sedentary = 1.2
// Lightly active = 1.375
// Moderately active = 1.550
// Very active = 1.725
// Extra active = 1.9
