let random = Math.random() * 10
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if (randomAsInteger>4) {
    console.log("BIG");

} else if (randomAsInteger<=4 && randomAsInteger>0) {
    console.log("SMALL");

} else if (randomAsInteger==0) {
    console.log("0");
}