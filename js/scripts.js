const toggle = document.getElementById(`switch`)
const backGrund = document.querySelector(`.BackGround`)

toggle.addEventListener(`change`, () => {
    
        document.body.classList.toggle(`light-theme`)
        backGrund.classList.toggle(`black-background`)
        backGrund.classList.toggle(`white-background`)
   
})