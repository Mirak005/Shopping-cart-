//Variables Globales
const likeBtn = Array.from(document.querySelectorAll(".like-btn"));

likeBtn.forEach(el => {
  el.addEventListener("click", function() {
    if (el.style.color !== "red") {
      el.style.color = "red";
    } else {
      el.style.color = "black";
    }
  });
});
