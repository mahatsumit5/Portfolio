function myPolicy() {
  var txt;

  if (
    confirm(
      "This website is Created By Sumit Mahat and I do not provide any consent for others to use this for their own purpose.Please agree before Visiting my website. Thank you for understanding."
    )
  ) {
    txt = "";
  } else {
    txt = "Please comply with our policy to vist our store";
  }
  document.getElementById("p2").innerHTML = txt;
}

// function to hide side menu bar when clicked

function onClicked() {
  var yes = document.getElementById("check");

  if (yes.checked == true) {
    return (document.getElementById("side-bar").style.display = "flex");
  } else {
    return (document.getElementById("side-bar").style.display = "none");
  }
}

function Clicked() {
  document.getElementById("side-bar").style.display = "none";
  // document.getElementById("p2").innerHTML =
  //   "Your width is " + window.innerWidth;
}
// function myBody() {
//   var a = window.innerWidth;
//   if (a < 600) {
//     return (document.getElementById("menu-icon").style.display = "contents");
//   }
// }
