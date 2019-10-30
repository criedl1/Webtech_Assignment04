function incrementClickCount(){
    var clickCount = 0;
    return ++clickCount;
}
document.getElementById("myBtn").addEventListener("click",
    function() {
        alert(incrementClickCount());
    });