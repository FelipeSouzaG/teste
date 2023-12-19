function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar tar img
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  }
}
