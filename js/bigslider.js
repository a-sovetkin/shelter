const slider = document.querySelector('.slider');
let petsAll = [];

let currentPage = 1;
let countPage = 6;
let countCards = 8;

for (let i=0; i<countPage; i++){
    shuffle(pets)
    petsAll = petsAll.concat(pets);
}

//=====================

let resizeObserver = new ResizeObserver(() => {
    // let curPage = currentPage;

    console.log('W =', window.innerWidth);
    if (window.innerWidth >= 1280){
        countPage = 6;
        countCards = 8;
        console.log( 'countPage = ', countPage);
    }
    if (window.innerWidth >= 640 && window.innerWidth < 1280){
        countPage = 8;
        countCards = 6;
        console.log( 'countPage = ', countPage);
    }
    if (window.innerWidth < 639){
        countPage = 16;
        countCards = 3;
        console.log( 'countPage = ', countPage);
    }

    if ( currentPage > countPage) {
        currentPage = countPage;
    }

    loadSlider(petsAll.slice((currentPage-1)*countCards, currentPage*countCards), 600);

    checkButtonStatus();
});
resizeObserver.observe(slider);

//=====================

let cardsPhoto = document.querySelectorAll('.slider-card-photo');
let cardsName = document.querySelectorAll('.slider-card-info');

// перечислим 4 кнопки
let firstButton = document.querySelector('.slider-button.first');
let lastButton = document.querySelector('.slider-button.last');
let nextButton = document.querySelector('.slider-button.next');
let prevButton = document.querySelector('.slider-button.prev');
let currentButton = document.querySelector('.slider-button.active');

let prev = petsAll.slice(-countCards);
let current = petsAll.slice(0,countCards);
let next = petsAll.slice(countCards,countCards*2);

loadSlider(current);

const sliderButton_many = document.querySelectorAll('.slider-button.many');
const sliderButton_one = document.querySelectorAll('.slider-button.one');

sliderButton_many.forEach((el) => el.addEventListener("click", () => slide(el)));
sliderButton_one.forEach((el) => el.addEventListener("click", () => slide(el)));

function loadSlider(data, timeout = 0) {
    slider.classList.add("active");
    for (let i = 0; i < 8; i++) {
        window.setTimeout(() => {
            cardsName[i].innerHTML = data[i].name;
            cardsPhoto[i].setAttribute('src', data[i].img);
        }, timeout);
    }
    window.setTimeout(() => slider.classList.remove("active"), timeout);
}

function slide(el) {
    if (el.classList.contains('first')) {
        loadSlider(petsAll.slice(0,countCards), 600);
        currentPage = 1;
        // currentButton.innerHTML = currentPage;
    }

    if (el.classList.contains('last')) {
        loadSlider(petsAll.slice(-countCards), 600);
        currentPage = countPage;
        // currentButton.innerHTML = currentPage;
    }

    if (el.classList.contains('next')) {
        currentPage++;
        // currentButton.innerHTML = currentPage;
        loadSlider(petsAll.slice((currentPage-1)*countCards, currentPage*countCards), 600);
    }

    if (el.classList.contains('prev')) {
        currentPage--;
        // currentButton.innerHTML = currentPage;
        loadSlider(petsAll.slice((currentPage-1)*countCards, currentPage*countCards), 600);
    }
    checkButtonStatus();
}

function checkButtonStatus() {
    currentButton.innerHTML = currentPage;
    if (currentPage == 1) {
        firstButton.setAttribute("disabled", '');
        prevButton.setAttribute("disabled", '');
        lastButton.removeAttribute("disabled");
        nextButton.removeAttribute("disabled");
    }

    if (currentPage == countPage) {
        firstButton.removeAttribute("disabled");
        prevButton.removeAttribute("disabled");
        lastButton.setAttribute("disabled", '');
        nextButton.setAttribute("disabled", '');
    }

    if (currentPage > 1 && currentPage < countPage) {
        firstButton.removeAttribute("disabled");
        lastButton.removeAttribute("disabled");
        nextButton.removeAttribute("disabled");
        prevButton.removeAttribute("disabled");
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}