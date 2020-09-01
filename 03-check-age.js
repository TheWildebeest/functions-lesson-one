function canPurchaseAlcohol(age, country) {
  if (age < 15 && country === "Central African Republic") {
    return "No!";
  } else if (age < 16 && (country === "Austria" || country === "British Virgin Islands" || country === "Congo" || country === "Dominica" || country === "Germany" || country === "Guyana" || country === "Liechtenstein" || country === "Lithuania" || country === "Palestine" || country === "Saint Lucia" || country === "Saint Vincent and the Grenadines" || country === "San Marion" || country === "Wales" || country === "Zambia")) {
    return "No!";
    return true
  } else if (age < 17 && country === "Malta") {
    return "No!";
  } else if (age < 21 && country === "USA") {
    return "No!";
  } else if (age < 18 && (country === "Albania" || country === "Andora" || country === "Angola" || country === "Antigua and Barbuda" || country === "Argentina" || country === "Australia" || country === "Bahamas" || country === "Burundi" || country === "Belize" || country === "Bermuda" || country === "Canada" || country === "Chad" || country === "Chile" || country === "England" || country === "Estonia" || country === "Falkland Islands" || country === "Finland" || country === "Fiji" || country === "France" || country === "Gabon" || country === "Grenada" || country === "Guatemala" || country === "Guyana" || country === "Honduras" || country === "Hungary" || country === "India" || country === "Ireland" || country === "Jordan" || country === "Kyrgyzstan" || country === "Lebanon" || country === "Lesoto" || country === "Lithuania" || country === "Mexico" || country === "Mongolia" || country === "Montenegro" || country === "Mozambique" || country === "Nepal" || country === "North Korea" || country === "Pakistan" || country === "Papua New Guinea" || country === "Philippines" || country === "Poland" || country === "Puerto Rico" || country === "Republic of Congo" || country === "Samoa" || country === "Scotland" || country === "Seychelles" || country === "Singapore" || country === "Slovakia" || country === "South Africa" || country === "South Sudan" || country === "Swaziland" || country === "Sweden" || country === "Syria" || country === "Taiwan" || country === "Tanzania" || country === "Thailand" || country === "Tokelau" || country === "Tonga" || country === "Turkey" || country === "Turkmenistan" || country === "Ukraine" || country === "United Arab Emirates" || country === "U.S. Virgin Islands" || country === "Vanuatu" || country === "Zambia")) {
    return "No!";
  } else if (age < 19 && (country === "Nicaragua" || country === "South Korea")) {
    return "No!";
  } else if (age < 20 && (country === "Iceland" || country === "Japan" || country === "Paraguay")) {
    return "No!";
  } else if (age < 21 && (country === "American Samoa" || country === "Cameroon" || country === "Congo – Brazzaville" || country === "Cote d’Ivoire" || country === "Egypt" || country === "Guam" || country === "Indonesia" || country === "Kazakhstan" || country === "Kiribati" || country === "Malaysia" || country === "Marshal Islands" || country === "Micronesia" || country === "Mongolia" || country === "Nauru" || country === "Nepal" || country === "Northern Mariana Islands" || country === "Palau" || country === "Samoa" || country === "Sri Lanka" || country === "USA")) {
    return "No!";
  } else if (country === "Afghanistan" || country === "Algeria" || country === "Bangladesh" || country === "Brunei Darusssalem" || country === "Iran" || country === "Iraq" || country === "Kuwait" || country === "Libya" || country === "Maldives" || country === "Mauritania" || country === "Oman" || country === "Pakistan" || country === "Qatar" || country === "Saudi Arabia" || country === "Somalia" || country === "Sudan" || country === "Tunisia") {
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

console.log("Country: USA. Age: 18. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(18, "USA") + "\n");
// expect "No!"

console.log("Country: Sudan. Age: 45. Can purchase alcohol: Expected: No!, received: "
  + canPurchaseAlcohol(45, "Sudan") + "\n");
// expect "No!"











