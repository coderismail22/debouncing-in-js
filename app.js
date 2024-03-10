// Select Button Using DOM
const button = document.getElementById("btn");

// Debounce Definition
function debounce(fn, delay) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}
// User Click
button.addEventListener(
  "click",
  debounce(() => {
    console.log("Button Clicked");
  }, 1000)
);
