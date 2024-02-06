//  console.log ("Welcome to Tech Spparks!");
//  console.log ("Sneha Khenwal");
//  console.log ("I love Javascript");

//  name= "My First Tutorial";
//  console.log (name);
//  // here name is a variable;


//  const student = {
//     fullName: "Sneha Khenwal",
//     age: 18,
//     cgpa: 9.8,
//     isPass: true
//  };

//                    // Practice Question 
// const product = {
//     title : "Parker Jotter Standard CT ball Pen (Black)",
//     rating : 4,
//     price : 270,
//     discount : 5,
// };

// const profile = {
//     name : "Shradha Khapra",
//     posts : 195 ,
//     isFollow : true ,
//     followers : 569000 ,
//     following : 4 ,
//     id : "shradhakhapra" ,
//     occupation : "Entrepreneur" ,
// };


//       //Arithmetic operators
// let a = 5;
// let b = 3;
// console.log ("a= ",a , "b= ",b);
// console.log ("a+b= ",a+b);
// console.log ("a-b= ",a-b);
// console.log ("a*b= ",a*b);
// console.log ("a/b= ",a/b);
// console.log ("a%b= ",a%b);
// console.log ("a**b= ",a**b);

//      //Unary operator
// let c=3;
// c++;
// console.log ("c", c);

// let num=prompt("Enter a number:");
// if(num%5===0) {
//     console.log ("It is a multiple of 5");
// }
// else {
//     console.log ("It is not a multiple of 5");
// }

// let marks=prompt("Enter your marks");
// if (marks>=80) {
//     console.log("your  grade is A");
// }
// else if (marks>=70) {
//     console.log("your  grade is B");
// }
// else if (marks>=60) {
//     console.log("your  grade is C");
// }
// else if (marks>=50) {
//     console.log("your  grade is D");
// }
// else {
//     console.log("your grade is F");
// }

// for (i=1;i<=5;i++)
// {
//     console.log("Siya Pagal");
// }

// let n=prompt("Enter the value of n");
// let sum=0;
// for (i=1;i<=n;i++){
//       sum=sum+i;
// }
// console.log ("The answer is",sum);

// for(i=1;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let gameNum=30;
// let userNum=prompt("Guess the game number");

// while (userNum!=gameNum){
//     userNum= prompt("Sorry, your guess was wrong. Guess the game number again");
// }

// Alert ("Congrats you won!!");


// let str1=  prompt("Enter your fullname");
// let str2= "@";
// let str3 = str1.length;
// let username= str2+str1+str3;
// let c= username.trim();
// console.log(c);

// alert (`Your Username is ${c}` );


// let marks = [85,97,44,37,76,60];
// let sum=0;
// for (let mark of marks) {
//     sum=sum+mark;
// }

// let avg= sum/marks.length;
// console.log (`Average marks of entire class is ${avg}`);


// prices = [250,645,300,900,50];
// let finalPrice;
// for(let price of prices){
//     finalPrice= price-price*0.1;
//     console.log(finalPrice);
// }


// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","netflix"];
// a= companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
// console.log(companies);

// function getData (dataId){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//     },2000);
// });
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });

// getData(1).then((res)=>{
//         console.log(res);
//         getData(2).then((res)=>{
//             console.log(res);
//             getData(3).then((res)=>{
//                 console.log(res);
//                 getData(4).then((res)=>{
//                     console.log(res);
//             });
//         });
//     });
// });

// async function getDatum(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
//     await getData(7);
//     await getData(8);
//     await getData(9);
// }
// getDatum();

// let arr=[1,2,3,4]


// let student ={
//     name:"Sneha",
//     class:"firstyear"
// }
// console.log(`My name is ${student.name} and class is ${student.class}`);

// let nums=[1,2,3,4,5,6];
// let newArray=nums.map((i)=> i*i
// );
// console.log(newArray);

// let abc = nums.filter((i)=> {
//     if(i%2==0){
//         return i;
//     }
// });

// console.log(abc);

// let xyz= nums.reduce((i,j)=>{
//     return i+j;
// });

// console.log(xyz);








