function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector(".profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/profile/slayer gif 3.gif");
  } else {
    img.setAttribute("src", "./img/profile/Slayer Gif 1.gif");
  }
}

// if(html.classList.contains ('light')) {
//     html.classList.remove ('light')
// } else {
//     html.classList.add('light')
//
