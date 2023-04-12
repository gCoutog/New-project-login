var formsignin = document.querySelector('#signin')
var formSignup = document.querySelector('#Signup')
var btncolor = document.querySelector('.btncolor')

document.querySelector('#btnSignin')
 .addEventListener('click', () => {
    formsignin.style.left = "25px"
    formSignup.style.left = "450px"
    btncolor.style.left = "0px"
})

document.querySelector('#btnSignup')
 .addEventListener('click', () => {
    formsignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btncolor.style.left = "110px"
})
