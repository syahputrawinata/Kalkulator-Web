const buttons = document.querySelectorAll("span");
const value = document.getElementById("value");
const themeCheckbox = document.getElementById("theme");
const body = document.querySelector("body");

themeCheckbox.onclick = () => {
  body.classList.toggle("dark");
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    try {
      if (this.innerText === "C") {
        value.innerText = "";
      } else if (this.innerText === "=") {
        value.innerText = eval(value.innerText);
      } else {
        value.innerText += this.innerText;
      }
    } catch (error) {
      value.innerText = "Invalid";
    }
  });
});