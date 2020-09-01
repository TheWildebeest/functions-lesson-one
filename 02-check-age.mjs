import { say } from './dev/say.mjs'

say("Age: 17. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(17) + "\n")
// expect "No!"

say("Age: 21. Can purchase alcohol: Expected: Yes!, received: "
  + canPurchaseAlcohol(21) + "\n");
// expect "Yes!"

say("Country: USA. Age: 18. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(18, "USA") + "\n");
// expect "No!"

/*
say("Country: Sudan. Age: 45. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(45, "Sudan") + "\n");
// expect "No!"
*/











function canPurchaseAlcohol(age, country) {
  if (age < 21 && country === "USA") {
    return "No!";
  } else if (age < 18) {
    return "No!";
  } else {
    return "Yes!";
  }
}