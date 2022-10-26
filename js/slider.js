(function() {
    const sliders = [...document.querySelectorAll('.testimonyBody')];
    const buttonNext = document.querySelector('#next');
    const buttonBack = document.querySelector('#before');
    let value;
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })
    buttonBack.addEventListener('click', ()=>{
        changePosition(-1);
    })

   
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimonyBody--show').dataset.id;
        value=Number(currentTestimony);
        value+=add
        sliders[Number(currentTestimony)-1].classList.remove('testimonyBody--show');
        if (value ==  sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimonyBody--show')
    }    
})();
