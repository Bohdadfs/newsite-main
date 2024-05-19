// Функція встановлення затримки анімації для елементів галереї при завантаженні сторінки
window.addEventListener('load', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item, index) {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});

// Функція для відкриття модального вікна з зображенням
function openModal(imageSrc, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
}

// Функція для закриття модального вікна
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Отримуємо всі елементи з класом "gallery-item" (фотографії) та додаємо до них обробник події для відкриття модального вікна
var galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var imageSrc = this.querySelector('img').src;
        var captionText = this.querySelector('.caption').textContent;
        openModal(imageSrc, captionText);
    });
});

// Ініціалізація Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Обробник закриття модального вікна
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
