function printMonth(){
}
let days = "";
for (let index = 1; index <= 31; index++) {
    if (index<10){
        days = days + " " + index + " |";
    }else {
        days = days + index + " |";
    }

    if (index%7==0){
        console.log(days);
        days="";
    }
}
console.log(days);