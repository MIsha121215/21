// Додаємо плавний скролл до секції моделей
document.querySelector('.hero button').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.models').offsetTop,
        behavior: 'smooth'
    });
});
