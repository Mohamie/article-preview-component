document.addEventListener("DOMContentLoaded", function(){
    const shareIcon = document.querySelector(".share__icon");
    const cardContentContainer = document.querySelector(".card__content_wrapper");
    const shareSocialsContainer = document.querySelector(".share__socials");
    
    shareIcon.addEventListener("click", function(){
        cardContentContainer.classList.toggle("share__active");
        shareSocialsContainer.classList.toggle("active");
    });
});
