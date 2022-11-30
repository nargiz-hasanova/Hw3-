// const checkbox = document.getElementById("ChangeTheme");
// const links = document.getElementsByTagName("a");
// const header = document.querySelector("header");
// const h1 = document.getElementsByTagName("h1");
// const p = document.getElementsByTagName("p");
// const small = document.getElementsByTagName("small");


// if (sessionStorage.getItem("mode") == "dark") {
//   darkmode();
// } else {
//   nodark();
// }

// checkbox.addEventListener("click", function() {
//   if (checkbox.checked) {
//       nodark();
// } else {
//       darkmode();
//   }
// });

// function darkmode() {
//     document.body.classList.remove("light-mode-bg"); 
//   document.body.classList.add("dark-mode-bg"); 
//   header.style.backgroundColor = "#181A1B";
//   checkbox.checked = false; 
//   sessionStorage.setItem("mode", "dark"); 
//   for(let i = 0; i < links.length; i++){
//     links[i].style.color = "#fff";
//     }
//     for(let i = 0; i < h1.length; i++){
//     h1[i].style.color = "#fff";
//     }
//     for(let i = 0; i < p.length; i++){
//     p[i].style.color = "#fff";
//     }
//     for(let i = 0; i < small.length; i++){
//         small[i].style.color = "#a2ff00e2";
//         }
    
// }

// function nodark() {
//   document.body.classList.remove("dark-mode-bg");
//   document.body.classList.add("light-mode-bg"); 
//   header.style.backgroundColor = "#fff";
//   checkbox.checked = true; 
//   sessionStorage.setItem("mode", "light"); 
//   for(let i = 0; i < links.length; i++){
//     links[i].style.color = "#181A1B";

// }
//     for(let i = 0; i < h1.length; i++){
//     h1[i].style.color = "#181A1B";
//     }
//     for(let i = 0; i < p.length; i++){
//     p[i].style.color = "#181A1B";
//     }
//     for(let i = 0; i < small.length; i++){
//         small[i].style.color = "#12A708";
//         }

// }





window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var title = document.querySelector(".title");
    var logo = document.querySelector(".logo");
    header.classList.toggle("sticky", window.scrollY > 50);
    title.classList.toggle("title-sticky", window.scrollY > 50);
    logo.classList.toggle("d-none", window.scrollY > 50);
}
)


window.addEventListener("scroll", function() {
    console.log(window.scrollY);
    var headerNav = document.querySelector(".header-nav")
    var aboutNav = document.querySelector(".about-nav")
    var hocNav = document.querySelector(".hoc-nav")
    var goTotop = document.querySelector(".go-to-top")
    if (window.scrollY > 650) {
        goTotop.style.opacity = "1";
    }
    else {
        goTotop.style.opacity = "0";
    }
    if(window.scrollY < 590) {
        headerNav.classList.add("current")
        aboutNav.classList.remove("current")
        hocNav.classList.remove("current")
    }
    if(window.scrollY > 590 && window.scrollY < 1300) {
        headerNav.classList.remove("current")
        aboutNav.classList.add("current")
        hocNav.classList.remove("current")
    }
    if(window.scrollY > 1400 && window.scrollY < 3200) {
        headerNav.classList.remove("current")
        aboutNav.classList.remove("current")
        hocNav.classList.add("current")
    }
    else{
        headerNav.classList.remove("current")
        aboutNav.classList.remove("current")
        hocNav.classList.remove("current")
    }
})
