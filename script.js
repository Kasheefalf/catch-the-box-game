let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    let newX = Math.random() * (window.innerWidth - 90);
    let newY = Math.random() * (window.innerHeight - 100);

    box.style.left = newX + "px";
    box.style.top = newY + "px";
});

