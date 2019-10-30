const UNI = {
    names:["University of Vienna",
        "Medical University of Graz",
        "Medical University of Vienna",
        "Medical University of Innsbruck",
        "University of Klagenfurt"]};

function makeList(Uni) {
    let uniList = [];
    for (let i = 0; i <Uni.names.length ; i++) {
        //' und " nutzen, dann wird kein escape charakter benötigt
        uniList.push('<li class="Name">' + Uni.names[i]+"</li>")
    }
    return uniList;
}
console.log(makeList(UNI));


//Funktion output should be:
/*
["<li class="Name">University of Vienna</li>",
    "<li class="Name">Medical University of Graz</li>",
    "<li class="Name">Medical University of Vienna</li>",
    "<li class="Name">Medical University of Innsbruck</li>",
    "<li class="Name">University of Klagenfurt</li>"]
    
 */