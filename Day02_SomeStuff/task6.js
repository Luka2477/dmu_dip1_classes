// Lav en string variabel der indeholder noget kode med nogle parenteser – (), {} og [].
const strTrue = "({[]})()({}){}[]";
const strFalse = "({[]})(({}){}[]";

// Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er balancerede.
// Som datastruktur anvendes en stak (et array). Når der mødes en venstre parenteser i koden, skal den
// sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre
// parentes er øverst på stakken. Brug metoderne push() og pop().
const isBalanced = (str) => {
  const arr = [];

  for (let chr of str) {
    switch (chr) {
      case ")":
        if (arr.pop() !== "(") {
          return false;
        }
        break;

      case "]":
        if (arr.pop() !== "[") {
          return false;
        }
        break;

      case "}":
        if (arr.pop() !== "{") {
          return false;
        }
        break;

      default:
        arr.push(chr);
        break;
    }
  }

  return arr.length === 0;
};

console.log(`Should be true: ${isBalanced(strTrue)}`);
console.log(`Should be false: ${isBalanced(strFalse)}`);
