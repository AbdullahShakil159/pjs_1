let mydata = {
    name : "Peter",
    city : "Karachi",
    age : "1000",
    grade : "c",
};

console.log(mydata["city"]);
console.log(mydata["age"]);

console.log(mydata.salary);
console.log(mydata.grade);
console.log(mydata);

for(let i in mydata){
    console.log(i,mydata[i])
}

let a = 45;
let b = 75;

console.log("The sum of a=b is :",a+b);
console.log("The sum of a-b is :",a-b);
console.log("The sum of a*b is :",a*b);
console.log("The sum of a/b is :",a/b);
console.log("The sum of a%b is :",a%b);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let q = 70;

console.log(q);
console.log(q++);
console.log(q);

console.log(++q);

console.log(q);
console.log(q--);
console.log(q);

console.log(--q);

let age = 10;

if(age>=20){
    console.log("you can cast your vote");
}

if(age>=20){
    console.log("you can't cast your vote");
}



