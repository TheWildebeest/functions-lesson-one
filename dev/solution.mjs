import { say } from './say.mjs'

say("Age: 17. Can purchase alcohol: Expected \"No!\", received " + canPurchaseAlcohol("April 4 2003", 18) + "\n")
// expect "No!"

say("Age: 21. Can purchase alcohol: Expected \"Yes!\", received " + canPurchaseAlcohol("October 13 1999", 18) + "\n");
// expect "Yes!"

say("Age: 18. Can purchase alcohol: Expected \"No!\", received " + canPurchaseAlcohol("June 28 2004", 21) + "\n");
// expect "No!"

say("Age: 45. Legal drinking age: None (drinking is banned!) " + "Can purchase alcohol: Expected \"No!\", received " + canPurchaseAlcohol("May 4 1978", "n/a") + "\n");
// expect "No!"


/**
 * A function that tells you whether someone can legally buy alcohol.
 * @param {number} dateOfBirth the person's date of birth in format MMMM DD YYYY
 * @param {number} legalDrinkingAge the legal  drinking age in your country
 * @returns {string} either "Yes!" or "No!"
 */
function canPurchaseAlcohol(dateOfBirth, legalDrinkingAge) {
  const age = (Date.now() - Date.parse(dateOfBirth)) / 31556952000;
  if (age < legalDrinkingAge) {
    return "No!"
  } else {
    return "Yes!"
  }
};