/**
 * A function that tells you whether someone can legally buy alcohol.
 * @param {number} dateOfBirth the person's date of birth in format MMMM DD YYYY
 * @param {number} legalDrinkingAge the legal  drinking age in your country
 * @returns {string} either "Yes!" or "No!"
 */
function canPurchaseAlcohol(dateOfBirth, legalDrinkingAge) {
  const age = (Date.now() - Date.parse(dateOfBirth)) / 31556952000;

  // We've been given line eight to help us out, but we need to fix the logic for this function.

  if (age < 18) {
    return "No!";
  } else {
    return "Yes!";
  }

  // The logic should be something like this:
  // If age is above legalDrinkingAge: return "Yes!"
  // Otherwise: return "No!"

  // Use console.log() to output information to the terminal so you can see what's going on under the hood.
};






console.log("Age: 17. Legal Drinking Age: 18. Expected No!, received "
  + canPurchaseAlcohol("April 4 2003", 18)
  + "\n")
// expect "No!"

console.log("Age: 21. Legal Drinking Age: 18. Expected Yes!, received "
  + canPurchaseAlcohol("October 13 1999", 18)
  + "\n");
// expect "Yes!"

console.log("Age: 18. Legal Drinking Age: 21. Expected No!, received "
  + canPurchaseAlcohol("June 28 2004", 21)
  + "\n");
// expect "No!"

console.log("Age: 45. Legal Drinking Age: None (alcohol banned) "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978", "n/a")
  + "\n");
// expect "No!"

console.log("Age: 45. Legal Drinking Age: None (alcohol banned). "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978", 0)
  + "\n");
// expect "No!"

console.log("Age: 45. Legal Drinking Age: None (alcohol banned). "
  + "Expected \"No!\", received "
  + canPurchaseAlcohol("May 4 1978")
  + "\n");
// expect "No!"