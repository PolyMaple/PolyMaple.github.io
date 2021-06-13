var darkMode = document.getElementById('darkMode');

var darkLabel = "darkModeLabel";
var darkLang = "Dark";
var lightLang = "Light";

var imgID = "logo";
var darkImg = "./dark.png";
var lightImg = "./light.png";

window.addEventListener('load', function () {
  if (darkMode) {
    initTheme();
    darkMode.addEventListener('change', function () {
      resetTheme();
    });
  }
});

function initTheme() {
  var darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
  darkMode.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  //darkThemeSelected ? document.getElementById(imgID).src = darkImg : document.getElementById(imgID).src = lightImg;
  darkThemeSelected ? document.getElementById(darkLabel).innerHTML = darkLang : document.getElementById(darkLabel).innerHTML = lightLang;
  const twitterBox = document.getElementById("twitter-timeline");
  if (twitterBox && darkThemeSelected)
	twitterBox.setAttribute("data-theme","dark");
}

function resetTheme() {

	const twitterBox = document.getElementById("twitter-timeline");	

  if (darkMode.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode', 'dark');
    //document.getElementById(imgID).src = darkImg;
    document.getElementById(darkLabel).innerHTML = darkLang;
	if (twitterBox && darkThemeSelected)
	  twitterBox.setAttribute("data-theme","dark");
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkMode');
    //document.getElementById(imgID).src = lightImg;
    document.getElementById(darkLabel).innerHTML = lightLang;
	if (twitterBox && darkThemeSelected)
	  twitterBox.setAttribute("data-theme","light");
  }
}