/**
 * A function that tells you whether someone can legally buy alcohol.
 * @param {number} dateOfBirth the person's date of birth in format MMMM DD YYYY
 * @param {number} legalDrinkingAge the legal  drinking age in your country
 * @returns {string} either "Yes!" or "No!"
 */
function canPurchaseAlcohol(dateOfBirth, legalDrinkingAge) {
  const age = (Date.now() - Date.parse(dateOfBirth)) / 31556952000;
  if (typeof legalDrinkingAge != "number" || !legalDrinkingAge) {
    return "No!"
  } else if (age >= legalDrinkingAge) {
    return "Yes!";
  } else {
    return "No!";
  }
}






say("Age: 17. Legal Drinking Age: 18. Expected No!, received "
  + canPurchaseAlcohol("April 4 2003", 18)
  + "\n")
// expect "No!"

say("Age: 21. Legal Drinking Age: 18. Expected Yes!, received "
  + canPurchaseAlcohol("October 13 1999", 18)
  + "\n");
// expect "Yes!"

say("Age: 18. Legal Drinking Age: 21. Expected No!, received "
  + canPurchaseAlcohol("June 28 2004", 21)
  + "\n");
// expect "No!"

say("Age: 45. Legal Drinking Age: None (alcohol banned) "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978", "n/a")
  + "\n");
// expect "No!"

say("Age: 45. Legal drinking age: None (alcohol banned). "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978", 0)
  + "\n");
// expect "No!"

say("Age: 45. Legal drinking age: None (alcohol banned). "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978")
  + "\n");
// expect "No!"


