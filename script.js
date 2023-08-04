function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar add avatar-light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Leandro Penha com fundo de flor rosa")
  } else {
    // se estiver sem light mode manter avatar
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Leandro Penha a noite")
  }
}
