function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        console.log("teste")
        img.setAttribute("src", "./public/assets/nina3.jpeg") }
        else { 
            img.setAttribute("src", "./public/assets/nina2.jpeg")
        }


}

