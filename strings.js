// accessing string character
const batsmen = "Virat";
console.log(batsmen[1]);
// strings are immutable
const q = "queen";
q[1] = "U";
console.log(q);
// multiline string
const message1 = 'I am  Sanjay, ' +
    'I am a Mechanical Engineer ' +
    'i love to code.'
console.log(message1);
// string length 
const score = "Hundred";
console.log(score.length);
// string objects
const line = new String("classroom");
console.log(typeof line);
// concatnating strings
const phrase1 =  "I am";
const phrase2 =  "Indian";
console.log(phrase1.concat(" ", phrase2).split());
console.log(phrase1.split());
console.log(phrase2.slice(1,3));
