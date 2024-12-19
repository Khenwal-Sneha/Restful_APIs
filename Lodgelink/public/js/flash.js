document.addEventListener("DOMContentLoaded",()=>{
    let successflash = document.querySelector(".alert-success");
    let failureflash = document.querySelector(".alert-danger");
    document.addEventListener("load",()=>{
        successflash.style.position="relative";
        successflash.style.top="-5rem";
        failureflash.style.position="relative";
        failureflash.style.position="-5rem";
    })
});

