
let headerD = document.querySelector(".home-header");
let nav = document.querySelector("nav");

let rootOptions = {
    rootMargin: "-400px"
}

let Obsever = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (!entry.isIntersecting) {
            nav.classList.add("active")
            console.log("is intersecting")
        }else{
            nav.classList.remove("active");
        }
    })
},
rootOptions)

Obsever.observe(headerD);


////clone

    const slider = document.querySelector(".tech-slider");
    const slides = Array.from(slider.children);

    // Clone each slide once
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });


    //nav
    document.querySelector("#bars").addEventListener("click",()=>{
        document.querySelector(".links").classList.toggle("active");
        console.log("emma")
    })