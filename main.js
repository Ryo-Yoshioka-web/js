// document.getElementsByClassName("menu").onclick = function () {
//     console.log(1);
//     document.getElementById(this).classList.toggle('open')
// }


document.querySelector(".menu").addEventListener(
    "click",
    function () {
        console.log(1);
    },
    false
);