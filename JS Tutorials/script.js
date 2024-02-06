


// function Vowels(string){
//     let t=0;
//     for(let i of string){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"||i==="A"||i==="E"||i==="I"||i==="O"||i==="U") 
//         {
//            t=t+1; 
//         }
//     }
//     console.log(`The total number of vowels in given string are ${t}.`);
// }

// Vowels("Javascript");


// Vowels=(string)=>{
//     let t=0;
//     for(let i of string){
//         if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"||i==="A"||i==="E"||i==="I"||i==="O"||i==="U") 
//         {
//            t=t+1; 
//         }
//     }
//     return t;
// }

// console.log(`Number of Vowels in given string are ${Vowels("I Love JS!!")}`);

// let array=[1,2,3,4,5,6];
// array.forEach(function square(val){
//     console.log(val*val);
// });


// const array=[89,90,92,93,95,80,97,79];
// newArray= array.filter((item)=>{
//     return item>90;
// }
// )

// console.log(newArray);

// let n=prompt("Enter the value of n");
// let arr=[];

// for (i=0;i<n;i++){
//     arr[i]=i+1;
// }
// console.log(arr);

// reducedArr= arr.reduce((pro,num)=>
// {
//     return pro+num;
// })

// console.log(reducedArr);


// let h2= document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText="Hello Javascript from apna college students";


// let divs= document.querySelectorAll(".box");
// divs[0].innerText="abc";
// divs[1].innerText="def";
// divs[2].innerText="ghic";


                        //    QUE 1
// let newBtn = document.createElement("button");
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// newBtn.innerText="Click Me!";
// let body= document.querySelector("body");
// body.prepend(newBtn);


//                        //QUE  2
// let para= document.querySelector("p");
// para.classList.add("newClass");


let toggle=document.querySelector(".div");
let currMode = "light";
toggle.addEventListener("click", ()=> {
    if (currMode==="light"){
        currMode= "dark";
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector(".ip2").style.visibility="hidden";
    document.querySelector(".ip1").style.visibility="visible";
    }
    else {
        currMode= "light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector(".ip1").style.visibility="hidden";
        document.querySelector(".ip2").style.visibility="visible";
    }
    console.log (currMode);
});

class User {
     constructor(name,email){
        this.name = name;
        this.email = email;
     }

      viewData(){
        console.log("website data");
      }
}

let stu1 = new User("sneha","cfhgf");
let stu2 = new User("gjub","ghgjh");


class Admin extends User {
    editData(){
        gjhg = "jg";
    }
}



