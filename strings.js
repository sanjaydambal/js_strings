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

const haveConflict = (event1,event2) => {
    let[startTime1,endTime1] = event1;
    let[startTime2,endTime2] = event2;
    startTime1 = parseInt(startTime1.replace(":",""));
    startTime2 = parseInt(startTime2.replace(":",""));
    endTime1 = parseInt(endTime1.replace(":",""));
    endTime2 = parseInt(endTime2.replace(":",""));
    if(startTime1<=endTime2 && startTime2<=endTime1){
        return true;
    }
    else{
        return false;
    }
}
console.log(haveConflict(["10.00","11.00"],["12.00","13.00"]));

const arr = [1,7,3,6,5,6];

const pivotIndex = (arr,prevSum=0,total=arr.reduce((a,b)=>a+b)) => {
    for(let i =0;i<=arr.length;i++){
        if((total-arr[i]) == prevSum) return i;
            total = total-arr[i];
            prevSum = prevSum+arr[i];
        
    }
    return -1;
}
console.log(pivotIndex([1,7,3,6,5,6]));