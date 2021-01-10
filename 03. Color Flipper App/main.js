//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    // console.log(randomNumber);

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}