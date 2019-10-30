let greet =
    gender =>
        name =>
            'Dear ' + (gender === 'female' ? 'Mrs. ' : 'Mr. ') + name;
let women = ['Susan', 'Karen', 'Amanda'];
let greetWoman = greet('female');
for(let w of women)
    console.log(greetWoman(w));


// Funktion in Langschreibweise
let greet2 = function (gender) {
    return function (name) {
        return "Dear2 " + (gender ==="female" ? "Mrs. " : "Mr. ") + name;
    }
}
let greetWoman2 = greet2('female');
for(let w of women){
    console.log(greetWoman2(w));
}