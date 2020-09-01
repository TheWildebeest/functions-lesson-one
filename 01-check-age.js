function canPurchaseAlcohol(age) {
  if (age < 18) {
    return "No!";
  } else {
    return "Yes!";
  }
}








console.log("Age: 17. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(17) + "\n")
// expect "No!"

console.log("Age: 21. Can purchase alcohol: Expected: Yes!, received: "
  + canPurchaseAlcohol(21) + "\n");
// expect "Yes!"


// console.log("Country: USA. Age: 18. Can purchase alcohol: Expected: No!, received: "
//   + canPurchaseAlcohol(18, "USA") + "\n");
// // expect "No!"
















