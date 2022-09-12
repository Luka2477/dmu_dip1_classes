const spans = document.querySelectorAll("span");
const h1s = document.querySelectorAll("h1");
let currShown = h1s[0];

for (let i in spans) {
  spans[i].onclick = () => {
    currShown.style.display = "none";
    currShown = h1s[i];
    currShown.style.display = "block";
  };
}
