let myButton = document.getElementById("btn_back_to_top");

window.onscroll = function () {
  onscrollFunction();
};

function onscrollFunction() {
  if (
    document.documentElement.scrollTop > 20 ||
    document.body.onscrollTop > 20
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
myButton.addEventListener("click", goTop);

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
