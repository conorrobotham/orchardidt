console.log('plugins');
;function addListeners(){
    // your code
    console.log('main');

        document.getElementById("redSpoon").onclick = function () {
            location.href = "html/red.html";
            console.log('redSpoon clicked');
        };
        document.getElementById("greenSpoon").onclick = function () {
            location.href = "html/green.html";
            console.log('greenSpoon clicked');

        };
        document.getElementById("whiteSpoon").onclick = function () {
            location.href = "html/white.html";
            console.log('whiteSpoon clicked');
        };


}
function coloursNav(){
        document.getElementById("home").onclick = function () {
            location.href = "../index.html";
            console.log('home clicked');
        };
        document.getElementById("redPage").onclick = function () {
            location.href = "red.html";
            console.log('redPage clicked');
        };
        document.getElementById("greenPage").onclick = function () {
            location.href = "green.html";
            console.log('greenPage clicked');
        };
        document.getElementById("whitePage").onclick = function () {
            location.href = "white.html";
            console.log('whitePage clicked');
        };
}

//# sourceMappingURL=scripts.js.map