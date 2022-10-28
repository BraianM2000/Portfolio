const header = document.querySelector("header");

/** Navbar effect**/
const firstSkill = document.querySelector(".skill:first-child");

const skCounters = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".skill svg circle")
const mlSection = document.querySelector(".milestones");
const mlCount = document.querySelectorAll(".number span")
let skillsPlayed = false;
let mlPlayed = false;

window.addEventListener("scroll", ()=>{
   if(!skillsPlayed) skillsCounter();
   if(!mlPlayed) mlCounter();
})

function updateCount(num, maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum<maxNum){
        num.innerText = currentNum + 1
        setTimeout(()=>{
            updateCount(num, maxNum);
        }, 12)
    }
}


function semiTransparenteNavbar (){
    //window.pageYOffset returns the position of the page on the y-axis
    header.classList.toggle("scrolled", window.pageYOffset >0) //if y-axis potition > 0 return true
}

semiTransparenteNavbar()

window.addEventListener("scroll", semiTransparenteNavbar);

/*-----Scroll Reveal ------------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
})
sr.reveal(".showcaseInfo", {delay: 600});
sr.reveal(".showcaseImage", {origin:"top",delay: 700});

/*Skills animations */
function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >=topPosition + el.offsetHeight){
        return true;
    }else{
        return false;
    }
}



function skillsCounter(){
    if(!hasReached(firstSkill)) return;
     skillsPlayed = true

    skCounters.forEach((counter, i)=>{
        let target = counter.dataset.target;
        let strokeValue = 427 - 427 * (target/100);

        progressBars[i].style.setProperty("--target", strokeValue) ;

        setTimeout(()=>{
            updateCount(counter, target)
        }, 400)
    })

    progressBars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"))
}

/*services*/

function mlCounter() {
    mlPlayed=true;
    if(!hasReached(mlSection)) return;
    mlCount.forEach(counter =>{
        let target = +counter.dataset.target;
        setTimeout(()=>{
            updateCount(counter,target)
        },400)
    })
}