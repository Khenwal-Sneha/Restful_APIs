document.addEventListener('DOMContentLoaded',()=>{
    //Toggle review button logic
    let reviewBtn = document.querySelector(".review-btn");
    let allRev = document.querySelector("#all-reviews");
    let review = false;

    reviewBtn.addEventListener('click', () => {
        if (!review) {
            allRev.style.display = "block";
            review = true;
            reviewBtn.textContent = "Hide Reviews";
        }
        else {
            allRev.style.display = "none";
            review = false;
            reviewBtn.textContent = "See Reviews";
        }
    });
});
