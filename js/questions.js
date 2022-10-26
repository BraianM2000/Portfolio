(function () {
    const titleQuestions = [...document.querySelectorAll('.questionTitle')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding= question.parentElement.parentElement;
            addPadding.classList.toggle('questionPadding--add')
            question.children[0].classList.toggle('questionArrow--rotate')
            if (answer.clientHeight==0) {
                height=answer.scrollHeight;
            }
            answer.style.height = `${height}px`
        })
    })

})();