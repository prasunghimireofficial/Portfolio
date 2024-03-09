

// For Typing Effect
var typed = new Typed(".dynamic-text", {
  strings: ["Website Designer", "UI/UX Designer", "Website Developer", "App Designer"],
  typeSpeed: 125,
  backSpeed: 125,
  loop: true
});






// For About Section
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


//To copy Email From Contact Section
function copyMyEmail() {
  // Get the text 
  var copyEmail = document.getElementById("myEmail").innerHTML;


  // Copy to Clipboard
  navigator.clipboard.writeText(copyEmail);

  // Alert the copied text
  alert("Copied the Email: " + copyEmail);
}