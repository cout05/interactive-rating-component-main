const mybuttons = document.getElementsByClassName("rateButton");

for (let i = 0; i < mybuttons.length; i++) {
  mybuttons[i].addEventListener("click", function() {
    for (let j = 0; j < mybuttons.length; j++) {
      mybuttons[j].classList.remove("selected");
    }
    mybuttons[i].classList.add("selected");
  });
}

const mySubmit = document.getElementById("mySubmit");

mySubmit.addEventListener("click", function() {
  myContainer = document.getElementById("ratingContainer");
  myContainer2 = document.getElementById("thankYou");

  let selectedButton;
  for (let i = 0; i < mybuttons.length; i++) {
    if (mybuttons[i].classList.contains("selected")) {
      selectedButton = mybuttons[i];
      break;
    }
  }
  document.getElementById("ratedNumber").innerHTML = selectedButton.innerHTML;
  myContainer.style.display = "none";
  myContainer2.style.display = "grid";
});
