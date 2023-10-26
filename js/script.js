//Toggle icon navbar

//scroll Sections
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);
    // console.log("header");
}
