printmonth(31);
console.log("")
printmonth(28);
function printmonth(DayAmount) {
  let days = "";
console.log("MO | DI | MI | DO | FR | SA | SO |")
  for (index = 1; index <= DayAmount; index++) {

    if (index < 10) {

      days = days + " " + index + " | ";

    } else {

      days = days + index + " | ";

    }
    if (index % 7 == 0) {

      console.log(days);

      days = "";

    } 

  }

  console.log(days);

}