function toggleMenu() {
    const menu = document.querySelector('.H-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    document.querySelector('.h_icon').classList.toggle('active');/**/

}

const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})


