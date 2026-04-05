function myEndsWith(str, search, index = str.length) {
  if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof index !== "number"
  ) {
    return "no strings or number";
  }

  if (index > str.length) {
    index = str.length;
  } else if (index < 0) {
    index = 0;
  }

  let start = index - search.length;

  if (start < 0) {
    return false;
  }

  for (let i = 0; i < search.length; i++) {
    if (str[start+i] !== search[i]) {
      return false;
    }
  }
  return true;
}
const text = "JavaScript is awesome";

console.log(myEndsWith(text, "awesome"));       // true
console.log(myEndsWith(text, "Script"));        // false
console.log(myEndsWith(text, "Script", 10));    // true (ստուգում է միայն առաջին 10 տառի մեջ՝ "JavaScript")
console.log(myEndsWith(text, "Java"));          // false