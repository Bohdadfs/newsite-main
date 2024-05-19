// Функція встановлення затримки анімації для елементів галереї при завантаженні сторінки
window.addEventListener('load', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item, index) {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});

