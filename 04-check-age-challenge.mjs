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

say("Country: Sudan. Age: 45. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(45, "Sudan") + "\n");
// expect "No!"


/**
 * A function that tells you whether someone can legally buy alcohol.
 * @param {number} dateOfBirth the person's date of birth in format MMMM DD YYYY
 * @param {number} legalDrinkingAge the legal  drinking age in your country
 * @returns {string} either "Yes!" or "No!"
 */
function canPurchaseAlcohol(dateOfBirth, legalDrinkingAge) {
  const age = (Date.now() - Date.parse(dateOfBirth)) / 31556952000;

  /* If age is below legalDrinkingAge, return "No!"  */

  return;
};