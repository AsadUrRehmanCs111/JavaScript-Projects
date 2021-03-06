// set inital value to zero
let count = 0;
// // select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const styles = e.currentTarget.classList;
        console.log(styles)

        if (styles.contains("increase")) {
            count++
        }
        else if (styles.contains("decrease")) {
            count--
        }
        else if (styles.contains("reset")) {
            window.alert("Counter Has Been Reset")
            count = 0
        }
        else {
            alert("Some Error")
        }

        if (count > 0) {
            value.style.color = "Green";
        }
        else if (count < 0) {
            value.style.color = "Red"
        }
        else {
            value.style.color = "#fff"
        }

        value.textContent = count;
    });

});
