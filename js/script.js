// typing animation

var typed = new Typed(".typing", {
    strings:["", "Web Developer", "Ethical Hacker", "Software Developer","Data Scientist","Android Programmer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

// Aside

const nav = document.querySelector(".nav"), 
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", () => {
        allSection.forEach((section) => {
            section.classList.remove("back-section");
        })
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
               allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        a.classList.add("active")
        showSection(a);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}

function showSection(el) {
    allSection.forEach((section) => {
        section.classList.remove("active");
    })
   const target =  el.getAttribute("href").slice(1);
   document.querySelector("#" + target).classList.add("active");
}

function updateNav(el) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("actie");
        const target =  el.getAttribute("href").slice(1);
        if(target === navList[i].querySelector("a").getAttribute("href").slice(1)) {
            navList[i].querySelector("a").classList.add("actie");
        }
        
    }
}
const hireMe = document.querySelector(".hire-me");
hireMe.addEventListener("click", () => {
    showSection(hireMe);
    updateNav(hireMe);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
                    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    // for (let i = 0; i <totalSection; i++) {
    //     allSection[i].classList.toggle("open");
        
    // }
}


