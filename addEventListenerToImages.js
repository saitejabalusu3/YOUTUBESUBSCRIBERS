import { selectedImg } from "./userData.js";
export function getSelectedImg() {
  console.log("in getselectedelement");
  let selctImg = document.querySelectorAll(".selctImg");
  console.log(selctImg);
  selctImg.forEach((e) => {
    e.addEventListener("click", selectedImg);
  });
}
