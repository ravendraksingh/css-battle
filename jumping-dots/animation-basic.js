const button = document.querySelector("button");
const dots = document.querySelectorAll(".dot");
button.addEventListener("click", () => {
  button.classList.toggle("party-time");

  dots.forEach((dot) => {
    dot.classList.toggle("dance");
  });
});
