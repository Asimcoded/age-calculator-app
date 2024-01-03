let currentDate = new Date();
let dayBox = document.getElementById("day");
let monthBox = document.getElementById("month");
let yearBox = document.getElementById("year");

function emptyValidation() {
    let inputBoxs = document.getElementsByClassName("box");
    for (i = 0; i < inputBoxs.length; i++) {
        if (inputBoxs[i].value === undefined || inputBoxs[i].value === "") {
            inputBoxs[i].nextElementSibling.style.display = "block";
            inputBoxs[i].nextElementSibling.textContent = "This field is required";
            inputBoxs[i].previousElementSibling.style.color = "hsl(0, 100%, 67%)";
            inputBoxs[i].style.borderColor = "hsl(0, 100%, 67%)";
        }
        else {
            inputBoxs[i].nextElementSibling.style.display = "none";
            inputBoxs[i].previousElementSibling.style.color = "hsl(0, 1%, 44%)";
            inputBoxs[i].style.borderColor = "hsl(0, 0%, 86%)";
        }
    }
}

function inputCheck() {
    let year = parseInt(yearBox.value)
    let month = parseInt(monthBox.value)
    let day = parseInt(dayBox.value)
    let inputBoxs = document.getElementsByClassName("box");
    if (year <= currentDate.getFullYear()) {
        yearBox.nextElementSibling.style.display = "none";
        yearBox.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
        yearBox.style.borderColor = "hsl(0, 0%, 86%)";
        if (month <= 12 && month > 0) {
            monthBox.nextElementSibling.style.display = "none";
            monthBox.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
            monthBox.style.borderColor = "hsl(0, 0%, 86%)";
                    if (day <= new Date(year, month, 0).getDate()) {
                        dayBox.nextElementSibling.style.display = "none";
                        dayBox.previousElementSibling.style.color = "hsl(0, 1%, 44%)";
                        dayBox.style.borderColor = "hsl(0, 0%, 86%)";
                        displayCount(`${year}-${month}-${day}`)
                    }
                    else {
                        dayBox.nextElementSibling.style.display = "block";
                        dayBox.nextElementSibling.textContent = "Must be date month";
                        dayBox.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
                        dayBox.style.borderColor = "hsl(0, 100%, 67%)";
                    }
        }
        else {
            monthBox.nextElementSibling.style.display = "block";
            monthBox.nextElementSibling.textContent = "Must be valid month";
            monthBox.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
            monthBox.style.borderColor = "hsl(0, 100%, 67%)";
        }
    }
    else {
        yearBox.nextElementSibling.style.display = "block";
        yearBox.nextElementSibling.textContent = "Must be in past";
        yearBox.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
        yearBox.style.borderColor = "hsl(0, 100%, 67%)";
    }
}


function displayCount(dateOfBirth) {
    let brithDate = new Date(dateOfBirth);
    let bd = brithDate.getDate();
    let bm = brithDate.getMonth()+1;
    let by = brithDate.getFullYear();

    let today = new Date();
    let cd = today.getDate();
    let cm = today.getMonth()+1;
    let cy = today.getFullYear();

    let sd,sm,sy; //For storing the output

    sy = cy-by;

    if(cm>=bm){
        sm = cm - bm;
    }
    else{
        sy--;
        sm = 12 + cm - bm;
    }

    if(cd >= bd){
        sd = cd - bd;
    }
    else{
        sm--;
        sd = new Date(by,bm,0).getDate() + cd -bd; 
    }
    if(sm<0){
        sm = 11;
        sy--;
    }

    document.getElementById("year-val").textContent = sy;
    document.getElementById("month-val").textContent = sm;
    document.getElementById("days-val").textContent = sd;
    console.log(`You are ${sy} years, ${sm} months and ${sd} days`);
}
let calculateBtn = document.querySelector("#btn");
calculateBtn.addEventListener("click", () => {
    emptyValidation();
    inputCheck();
})
