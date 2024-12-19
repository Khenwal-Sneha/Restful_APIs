let batches = document.querySelectorAll(".batches")
let icons = document.querySelectorAll(".div");
let syms = document.querySelectorAll(".batchh i");
let teams = document.querySelectorAll(".teams");
let data = document.querySelectorAll(".data");
let dp3s = document.querySelectorAll(".dp3 i");



let dropdown1 = false;
let dropdown2 = false;
let dropdown3 = false;



icons.forEach((icon,index)=>{
    icon.addEventListener("click",()=>{
        dropdown1=!dropdown1;
        if(dropdown1){
        batches[index].classList.add("visible");
        batches[index].classList.remove("hidden");}
        else {
            batches[index].classList.add("hidden");
            batches[index].classList.remove("visible"); 
        }
    });
});

syms.forEach((sym,indice)=>{
    sym.addEventListener("click",()=>{
        dropdown2=!dropdown2;
        if(dropdown2){
        teams[indice].classList.add("visible");
        teams[indice].classList.remove("hidden");}
        else {
            teams[indice].classList.add("hidden");
            teams[indice].classList.remove("visible"); 
        }
    });
});

dp3s.forEach((dp3,indice)=>{
    dp3.addEventListener("click",()=>{
        dropdown3=!dropdown3;
        if(dropdown3){
        data[indice].classList.add("visible");
        data[indice].classList.remove("hidden");}
        else {
            data[indice].classList.add("hidden");
            data[indice].classList.remove("visible"); 
        }
    });
});

/* <div class="data hidden">
                            <div class="container">
                                <h2>Project Name</h2>
                                <p></p>
                            </div>
                            <div class="container">
                                <h2>Abstract</h2>
                                <p></p>
                            </div>
                        </div> */