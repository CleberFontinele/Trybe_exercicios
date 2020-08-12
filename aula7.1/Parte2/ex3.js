let clickCount = 0;
let textToDisplay = document.getElementById("text");

document.getElementById("buttonTeste")
.addEventListener("click", () => document.getElementById('text').innerText = `${clickCount += 1}`);


console.log("oi")
