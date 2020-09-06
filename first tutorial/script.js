function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "Button Clicked";
  document.body.appendChild(para);
}

//document.addEventListener("DOMContentLoaded", () => {});
//we used defer/async

const buttons = document.querySelectorAll("button");
buttons.forEach(addEventListener("click", createParagraph));
