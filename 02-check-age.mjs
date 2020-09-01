import { say } from './dev/say.mjs'

say("Age: 17. Can purchase alcohol: " + canPurchaseAlcohol(17) + "\n")
// expect "No!"

say("Age: 21. Can purchase alcohol: " + canPurchaseAlcohol(21) + "\n");
// expect "Yes!"

say("Age: 18. Can purchase alcohol: " + canPurchaseAlcohol(18, "USA") + "\n");
// expect "No!"

say("Country: Sudan. Can purchase alcohol: " + canPurchaseAlcohol("Sudan") + "\n");
// expect "No!"











function canPurchaseAlcohol(age, country) {
  if (age < 21 && country === "USA") {
    return "No!";
  } else if (age < 18) {
    return "No!";
  } else {
    return "Yes!";
  }
}