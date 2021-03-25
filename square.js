function animation () {

    const colors = ["2196F3", "e91e63", "ffeb3b", "74ff1d"];

    const section = document.querySelector("section");
    const square = document.createElement("span");

    const size = Math.random() * 20;

    square.style.height = 20 + size + "px";
    square.style.width = 20 + size + "px";

    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    // const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor = colors[Math.floor(Math.random()*4)];
    square.style.backgroundColor = "#" + randomColor;

    section.appendChild(square);

    setTimeout(function() {
        section.removeChild(square);
    }, 5000);
}

setInterval(animation,100);