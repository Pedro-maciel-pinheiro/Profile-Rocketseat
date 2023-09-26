function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector(".profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./SRC/img/profile/jp.png");
  } else {
    img.setAttribute("src", "./SRC/img/profile/jp.png");
  }
}

// if(html.classList.contains ('light')) {
//     html.classList.remove ('light')
// } else {
//     html.classList.add('light')
//
