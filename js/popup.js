// находим карточки
let cards = document.querySelectorAll('.slider-card');
let popup = document.querySelector('.popup');
let popup_close = document.querySelector('.popup_close');
const blackout_popup = document.querySelector(".blackout_popup");

popup_close.addEventListener("click", closePopup);
blackout_popup.addEventListener("click", closePopup);

cards.forEach((el) => el.addEventListener("click", () => openPopup(el)));

function openPopup(el) {
    popup.classList.toggle("_active");
    blackout_popup.classList.toggle("_open");
    document.body.style.overflowY = popup.classList.contains("_active") ? 'hidden' : 'auto';

    let name = el.querySelector('.slider-card-info').innerHTML;
    let dogInfo = pets.filter((v) => v.name == name);

    console.log('dogInfo= ', dogInfo);

    popup.querySelector('.popup_img').setAttribute('src', dogInfo[0].img);
    popup.querySelector('.popup_img').setAttribute('src', dogInfo[0].img);
    popup.querySelector('.popup_name').innerHTML =  dogInfo[0].name;
    popup.querySelector('.popup_type').innerHTML =  dogInfo[0].type + ' - ' + dogInfo[0].breed;
    popup.querySelector('.popup_text').innerHTML =  dogInfo[0].description;
    popup.querySelector('.popup_age').innerHTML =  dogInfo[0].age;
    popup.querySelector('.popup_inoculations').innerHTML =  dogInfo[0].inoculations;
    popup.querySelector('.popup_diseases').innerHTML =  dogInfo[0].diseases;
    popup.querySelector('.popup_parasites').innerHTML =  dogInfo[0].parasites;
}

function closePopup() {
    popup.classList.toggle("_active");
    blackout_popup.classList.toggle("_open");
    document.body.style.overflowY = popup.classList.contains("_active") ? 'hidden' : 'auto';
}