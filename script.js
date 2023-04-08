
function changeBg(){
    var navBar = document.getElementById('nav');
    var scrollValue = window.scrollY;
    if(scrollValue<600){
        navBar.classList.remove('bgColor');
    }
    else{
        navBar.classList.add('bgColor');
    }
}
window.addEventListener('scroll' , changeBg);

var btn=document.getElementById('btn');
btn.addEventListener('click' , function(e){
     e.preventDefault()
     var name=document.getElementById('name').value ;
     var phone=document.getElementById('phone').value ;
     var email=document.getElementById('email').value ;
     var subject=document.getElementById('subject').value ;
     var message=document.getElementById('message').value ;
     var body ='name: ' +name + '<br/> email: ' + email + '<br/> subject' + '<br/> phone'+ phone + '<br/> message'+ message;
     Email.send({
      Host : "smtp.elasticemail.com", 
        Username : "gangardepatil643@gmail.com",
        Password : "BF91EFF41FD7824C9DA210352C21C2102844",
        To : 'gangardepatil643@gmail.com',
        Subject:subject,
        From : email,
        Body : body
    }).then(
      message => alert(message)
    ); 

})
// new code
/*window.onload = function(){ 
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h2").onmouseover = event => {
let iterations = 0;
const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
    if (index < iterations) {
        return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
    if (iterations >= event.target.dataset.value.length) {
    clearInterval(interval);
    }
    iterations += 1 / 3;
}, 30);
}
};
*/

const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches; // true
console.log(`prefersDark = ${prefersDark}`);

flag = 0;

let currentTheme = document.getElementById("currentTheme");
let logo = document.getElementById('theme-logo');

const changeTheme = function(ctheme = false) {
    if (ctheme === false || flag === 1) {
        currentTheme.innerHTML = '<link rel="stylesheet" type="text/css" href="./themes/lightmode.css">';
        flag = 0;
        logo.innerHTML ="<i class='fa-solid fa-moon' id='theme'></i>";
        console.log("Light mode triggered");
    } else {
        currentTheme.innerHTML = '<link rel="stylesheet" type="text/css" href="./themes/darkmode.css">';
        flag = 1;
        logo.innerHTML = "<i class='fa-solid fa-sun' id='theme'></i>";
        console.log("Dark mode triggered");
    }
}

changeTheme(prefersDark);

logo.addEventListener('click', changeTheme);
// new code
var accountLink = document.querySelector(".account-link");
var accountOptions = document.querySelector(".account-options");

accountLink.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the link from navigating
  accountOptions.classList.toggle("show"); // toggle the display of the options
});
