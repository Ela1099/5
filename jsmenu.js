const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src ="4115230-cancel-close-cross-delete_114048.svg";
}
    else {
        navBtnImg.src ="icons8-меню.svg";
}
}