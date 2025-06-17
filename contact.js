let headerC = document.querySelector(".contact-header");
let cnav = headerC.querySelector(".contact-nav");
//obsever contact nav
let contactOptions={
    rootMargin: "-200px"
}

let contactObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            cnav.classList.add("cnav");
            console.log("is active " + cnav + "now")
        }else{
            cnav.classList.remove("cnav");
        }
    })
},contactOptions);
contactObserver.observe(headerC);