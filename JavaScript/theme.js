

// Theme Pannel Show & Hide
var settingButton = document.getElementById("theme-setting-button");
var themePannel = document.getElementById("theme-pannel");

settingButton.onclick = function () {
  themePannel.classList.toggle("active");
};

document.addEventListener('click', e => {
  if (e.target !== settingButton && !settingButton.contains(e.target) && e.target !== themePannel && !themePannel.contains(e.target)) {
    themePannel.classList.remove("active");
  }
})

//        Dark & Light Theme
var themeIconButton = document.getElementById("theme-icon-button");
var themeIcon = document.getElementById("theme-icon");
var darkTheme = "dark-theme";
var lightTheme = "light-theme"


var myTheme = localStorage.getItem('darkLightTheme');
if (myTheme == null) {
  myTheme = darkTheme;
}


document.body.classList.add(myTheme);


themeIconButton.onclick = function () {
  if (document.body.classList.contains("dark-theme")) {

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");

    document.body.classList.remove(darkTheme);
    document.body.classList.add(lightTheme);

    localStorage.setItem('darkLightTheme', lightTheme);
  } else {

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

    document.body.classList.remove(lightTheme);
    document.body.classList.add(darkTheme);

    localStorage.setItem('darkLightTheme', darkTheme);
  }
};



// Different color theme

let themeButton = document.querySelectorAll(".theme-button");


var myColorTheme = localStorage.getItem('colorTheme');

if (myColorTheme == null) {
  myColorTheme = "#27ae60";
}

document.querySelector(":root").style.setProperty("--special-text-color", myColorTheme);


themeButton.forEach((color) => {
  color.addEventListener("click", () => {

    let dataColor = color.getAttribute("data-color");

    document
      .querySelector(":root")
      .style.setProperty("--special-text-color", dataColor);

    localStorage.setItem('colorTheme', dataColor);

  });
});


//Selected Theme

const themeButtons = document.querySelectorAll('.theme-button');

var storedSelectedThemeColorId = localStorage.getItem('selectedThemeColorId');

// Checking in Local Storage
if (storedSelectedThemeColorId == null) {
  var storedSelectedThemeColor = document.getElementById("theme-button1");
  storedSelectedThemeColor.classList.add('selected');
} else {
  var storedSelectedThemeColor = document.getElementById(storedSelectedThemeColorId);
  storedSelectedThemeColor.classList.add('selected');
}

// Checking and and storing selected theme color in Local Storage
function themeSelection() {
  themeButtons.forEach(e => e.classList.remove('selected'));

  this.classList.add('selected');

  var selectedThemeColorId = this.id;
  localStorage.setItem('selectedThemeColorId', selectedThemeColorId)
}

//
themeButtons.forEach(themeButton => {
  themeButton.addEventListener('click', themeSelection);
});

