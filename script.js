const navSlide = () => {
    const navLinkButton = document.querySelector('.nav-links-button');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');
  
    nav-links-button.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
  
    navLinks.forEach(link, index) => {
        console.log(index);
    }
}

navSlide();