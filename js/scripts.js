const toggle = document.getElementById(`switch`)
const backGrund = document.querySelector(`.BackGround`)
const estado = window.matchMedia((`(prefers-color-scheme: light)`))

//Detectar prefers-theme y poner el light mode o dejar el dark
if(estado.matches){
    document.body.classList.add(`light-theme`)
    backGrund.classList.remove(`black-background`)
    backGrund.classList.add(`white-background`)
}

toggle.addEventListener(`change`, () => {
    
         document.body.classList.toggle(`light-theme`)
         backGrund.classList.toggle(`black-background`)
         backGrund.classList.toggle(`white-background`)

        if(estado.matches){
            backGrund.classList.add(`black-background-dark`)
            backGrund.classList.remove(`black-background`)
            document.body.classList.toggle(`dark-theme`)
            return
        }

})