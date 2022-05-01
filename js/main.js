document.addEventListener("DOMContentLoaded", (e) => { 

    var r = document.querySelector(':root');


    const logoDouble = document.querySelectorAll(".double-logo")


    for (let i = 0; i < logoDouble.length; i++) {
        var delayInMilliseconds = 500
        
        setTimeout(function() {
            logoDouble[i].classList.add('logo-loaded')
        }, delayInMilliseconds);
    }



    const buttonDarkToggle = document.querySelector('#dark-switch-input')

    buttonDarkToggle.addEventListener('click', function () {
        const toggler = document.querySelector('input#dark-switch-input')
        const togglerVal = toggler.getAttribute("checked"); 

        console.log(togglerVal)
        
        if(togglerVal == "false" || togglerVal == "null"){
            console.log("aaaaaaaa")
            toggler.setAttribute("checked", "true"); 
            r.style.setProperty('--base-color', '#1d1d1d')
            r.style.setProperty('--display-font-color', '#eef5fa')
            r.style.setProperty('--base-color-lifted-1', '#2b2b2b')
            r.style.setProperty('--section-bg', '#27215a')
        }else{
            console.log("bbbbb")
            toggler.setAttribute("checked", "false");
            r.style.setProperty('--base-color', '#888cb0')
            r.style.setProperty('--display-font-color', '#131c22')
            r.style.setProperty('--base-color-lifted-1', '#e0e3ff')
            r.style.setProperty('--section-bg', '#6a63ab')
        }
        
        // document.querySelector('input #dark-switch-input').checked = !toggler
    })

    
})