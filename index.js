
// naming the variables for inputs, labels and btn
let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
let labelDay = document.querySelector("#label_day");
let labelMonth = document.querySelector("#label_month");
let labelYear = document.querySelector("#label_year");
const sbtBtn = document.querySelector("#sbt_btn");

//for the errors
let smallDay = document.querySelector("#smallDay");
let smallMonth = document.querySelector("#smallMonth");
let smallYear = document.querySelector("#smallYear");

//actual age stuff
let dayA = document.querySelector("#days");
let monthA = document.querySelector("#months");
let yearA = document.querySelector("#years");

//actual date
const date = new Date();
const actualYear = date.getFullYear();
console.log(actualYear);

inputDay.addEventListener("input",()=> {
    let day = inputDay.value;
    if(day.length== 0){
        labelDay.classList.remove("error-text");
        inputDay.classList.remove("error");
        smallDay.textContent = "";
    }
    else {
        if(+day>31) {
            labelDay.classList.add("error-text");
        inputDay.classList.add("error");
        smallDay.textContent = "must be a valid day";
        }
        else{
            if(+day===0) {
                labelDay.classList.add("error-text");
        inputDay.classList.add("error");
        smallDay.textContent = "must be a valid day";
            }
            else {
                labelDay.classList.remove("error-text");
        inputDay.classList.remove("error");
        smallDay.textContent = "";
        if( day.length === 2)  {
inputMonth.focus();
              }     
            }
        }
    }
});

inputMonth.addEventListener("input",()=> {
    let month = inputMonth.value;
    if(month.length== 0){
        labelMonth.classList.remove("error-text");
        inputMonth.classList.remove("error");
        smallMonth.textContent = "";
    }
    else {
        if(+month>12) {
            labelMonth.classList.add("error-text");
        inputMonth.classList.add("error");
        smallMonth.textContent = "must be a valid month";
        }
        else{
            if(+month===0) {
                labelMonth.classList.add("error-text");
        inputMonth.classList.add("error");
        smallMonth.textContent = "must be a valid month";
            }
            else {
                labelMonth.classList.remove("error-text");
        inputMonth.classList.remove("error");
        smallMonth.textContent = "";
        if( month.length === 2)  {
inputYear.focus();
              }     
            }
        }
    }
});

inputYear.addEventListener("input",()=> {
    let year = inputYear.value;
    if(year.length== 0){
        labelYear.classList.remove("error-text");
        inputYear.classList.remove("error");
        smallYear.textContent = "";
    }
    else {
        if(+year>date.getFullYear() || +year < 1900 ) {
            labelYear.classList.add("error-text");
        inputYear.classList.add("error");
        smallYear.textContent = "must be a valid year";
        }
        else{
            if(+year===0) {
                labelYear.classList.add("error-text");
        inputYear.classList.add("error");
        smallYear.textContent = "must be a valid year";
            }
            else {
                labelYear.classList.remove("error-text");
        inputYear.classList.remove("error");
        smallYear.textContent = "";
         
            }
        }
    }
});


function calculate(day,month,year) {
    let today = new Date();
    let enterDate = new Date('${year}-${month}-${day}');

    let actualMonth = date.getMonth();
    let actualDate = date.getDate() + 1;
    let actualYear = date.getFullYear();

    if (inputDay.value.length == 0 &&
        inputMonth.value.length == 0 &&
        inputYear.value.length == 0
        ){
            inputDay.classList.toggle("error");
            inputMonth.classList.toggle("error");
            inputYear.classList.toggle("error");
            labelDay.classList.toggle("error-text");
            labelMonth.classList.toggle("error-text");
            labelYear.classList.toggle("error-text");

            smallDay.textContent = "This field needs to be filled ";
            smallMonth.textContent = "This field needs to be filled ";
            smallYear.textContent = "This field needs to be filled ";
        } else {
            if(enterDate > today) {
                inputDay.classList.toggle("error");
                inputMonth.classList.toggle("error");
                inputYear.classList.toggle("error");
                labelDay.classList.toggle("error-text");
                labelMonth.classList.toggle("error-text");
                labelYear.classList.toggle("error-text");
    
                smallDay.textContent = "insert a past date or an actual date";
                smallMonth.textContent = "insert a past date or an actual date";
                smallYear.textContent = "insert a past date or an actual date ";
                inputDay.value = "";
                inputMonth.value = "";
                inputYear.value = "";
            } else {
                let years = actualYear - year - 1 ;
                if (years===actualYear){
                    day = 0;
                }
                let months = actualMonth + 11 - month;

                 let days = 31 + actualDate - day;
                 if(days > 30){
                    months = months + 1 ;
                    days = days - 31;
                 }

                 if (year === actualYear){
                    if (month=== actualMonth){
                        years = 0;
                        months = 0 ;
                        days = actualDate - 1;
                    } else {
                        years = 0;
                        months = month ;
                        days = actualDate - 1;
                    }
                 }
                 
                 dayA.textContent = days;
                 monthA.textContent = months;
                 yearA.textContent = years;
            }
        } 
}

sbtBtn.addEventListener("click",(e) => {
    e.preventDefault;
    let day = +inputDay.value;
    let month = +inputMonth.value;
    let year = +inputYear.value;

    if(day>31 || month>12 || year > actualYear) {
        alert("enter a valid year");
    } else {
        calculate(day,month,year);
    }

});


