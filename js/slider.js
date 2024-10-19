const slider = document.querySelector('.slider');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

let cardsPhoto = document.querySelectorAll('.slider-card-photo');
let cardsName = document.querySelectorAll('.slider-card-info');

shuffle(pets);

let prev = pets.slice(-3);
let current = pets.slice(0,3);
let next = pets.slice(3,6);

loadSlider(current);

const sliderButton = document.querySelectorAll('.slider-button');
sliderButton.forEach((el) => el.addEventListener("click", () => slide(el)));

function loadSlider(data, timeout = 0) {
    slider.classList.add("active");
    for (let i = 0; i < 3; i++) {
        window.setTimeout(() => {
            cardsName[i].innerHTML = data[i].name;
            cardsPhoto[i].setAttribute('src', data[i].img);
        }, timeout);
    }
    window.setTimeout(() => slider.classList.remove("active"), timeout);
}

function slide(el) {
    if (el.classList.contains('left')) {
        loadSlider(prev, 600);
        next = current;
        current = prev;
        let tmp = pets.filter((v) => !current.includes(v));
        shuffle(tmp);
        prev = tmp.slice(0,3);
    }
    if (el.classList.contains('right')) {
        loadSlider(next, 600);
        prev = current;
        current = next;
        let tmp = pets.filter((v) => !current.includes(v));
        shuffle(tmp);
        next = tmp.slice(0,3);
    }
}
