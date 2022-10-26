const header = document.querySelector("header");

/** Navbar effect**/


function semiTransparenteNavbar (){
    //window.pageYOffset returns the position of the page on the y-axis
    header.classList.toggle("scrolled", window.pageYOffset >0) //if y-axis potition > 0 return true
}

semiTransparenteNavbar()

window.addEventListener("scroll", semiTransparenteNavbar);

/*-----Scroll Reveal ------------*/
