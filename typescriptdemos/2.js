var notSure = 4; //defined as any
notSure = "maybe a string instead";
notSure = false;
var stillNotSure; //No Type specified. inferred as any
stillNotSure = 5;
stillNotSure = "may be a strng instead";
stillNotSure = false;
console.log(stillNotSure);
