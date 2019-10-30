function incrementClickCount(){
    var clickCount = 0;
    return function clickcount() {
        return  ++clickCount;
    }

}

//um die innerere Funktion rauszuzuzzeln
let counter = incrementClickCount();
document.getElementById("myBtn").addEventListener("click",
    function() {
        alert(counter());
    });