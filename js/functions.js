function creaCarosello() {
    const sliderElem = document.querySelector(".my-carousel-images");
    sliderElem.innerHTML = "";
    indexCarousel = -1;

    images.forEach((currentImg) => {
    const slideElem = document.createElement("div");
    slideElem.classList.add("my-carousel-item");
    slideElem.setAttribute("carousel-item", indexCarousel++);

    if (indexCarousel === currentIndexCarousel) {
        slideElem.classList.add("active");
    }

    const slideContent = `
        <img
            class="img-fluid"
            src="${currentImg.image}"
            alt="${currentImg.title} picture"
        />
        <div class="item-description px-3">
            <h2>${currentImg.title}</h2>
            <p>${currentImg.text}</p>
        </div>
            
    `;
    slideElem.innerHTML = slideContent;
    sliderElem.appendChild(slideElem);
    });
}

function creaThumbnail() {
    bottomSlider.innerHTML = "";
    bottomSlider.appendChild(buttonNextElem);
    bottomSlider.appendChild(buttonPrevElem);

images.forEach((currentImg, index) => {
    const slideBotElem = document.createElement("img");
    slideBotElem.classList.add("img-fluid");
    slideBotElem.classList.add("my-thumbnail");
    slideBotElem.src = `./img/0${index + 1}.webp`;
    if (index === currentIndexCarousel) {
        slideBotElem.classList.add("active");
    }
    bottomSlider.appendChild(slideBotElem);
});
}

function automaticSlide(){
    if (currentIndexCarousel > 4) {
        currentIndexCarousel = 0;
    }
    if (indexBotImg > 4) {
        indexBotImg = 0;
    }
    creaCarosello();
    creaThumbnail(); 
    currentIndexCarousel++;
    indexBotImg++;
    console.log(currentIndexCarousel);
    console.log(indexBotImg);
};