let daysObj = [
    {
        month : 1,
        days : 31
    },
    {
        month : 2,
        days : [28,29]
    },
    {
        month : 3,
        days : 31
    },
    {
        month : 4,
        days : 30
    },
    {
        month : 5,
        days : 31
    },
    {
        month : 6,
        days : 30
    },
    {
        month : 7,
        days : 31
    },
    {
        month : 8,
        days : 31
    },
    {
        month : 9,
        days : 30
    },
    {
        month : 10,
        days : 31
    },
    {
        month : 11,
        days : 30
    },
    {
        month : 1,
        days : 31
    },
    
];
let currentDate = new Date();
let dayBox = document.getElementById("day");
let monthBox = document.getElementById("month");
let yearBox = document.getElementById("year");


console.log(new Date().getDate());

function emptyValidation() {
    let inputBoxs = document.getElementsByClassName("box");
    for(i =0;i<inputBoxs.length;i++){
        if(inputBoxs[i].value === undefined || inputBoxs[i].value === ""){
            inputBoxs[i].nextElementSibling.style.display = "block";
            inputBoxs[i].nextElementSibling.textContent = "This field is required";
            inputBoxs[i].previousElementSibling.style.color = "hsl(0, 100%, 67%)";
            inputBoxs[i].style.borderColor = "hsl(0, 100%, 67%)";
        }
        else{
            inputBoxs[i].nextElementSibling.style.display = "none";
            inputBoxs[i].previousElementSibling.style.color = "hsl(0, 1%, 44%)";
            inputBoxs[i].style.borderColor = "hsl(0, 0%, 86%)";
        }
    }    
    
}
function dateValidation(){
    let arr = [2024,11,7];
    let daysVal,monthVal,yearVal;
    if(arr[0] <= currentDate.getFullYear() && arr[0]  > 1850){
        if(arr[1]<= 12){
            if(arr[1] - 1 <=currentDate.getMonth()){
                console.log("Month");
                if(arr[2] >= currentDate.getDate()){
                    daysVal = arr[2] - currentDate.getDate();
                }
                else{
                    // let tempDay = arr[2] + cu
                }
            }
        }
        else{
            console.log("Enter the vaild month");
        }
    }
    else{
        console.log("Ptu vaild date");
    }
}

dateValidation()

// function displayAge(date){
//     let dob = new Date(date);

//     let age = currentDate.getFullYear() - dob.getFullYear()  

//     if(
//         currentDate.getMonth() < dob.getMonth ||
//         (currentDate.getMonth()==dob.getMonth() && currentDate.getDay()< dob.getDay())
//     ){
//         age--
//     }

//     console.log(age);
// }

let calculateBtn = document.querySelector("#btn");
calculateBtn.addEventListener("click",()=>{
    emptyValidation();
    dateValidation();
})


// displayAge("1990-1-2")