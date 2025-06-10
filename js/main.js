// Основной JS-файл для инициализации интерактивных элементов

document.addEventListener('DOMContentLoaded', function() {
  // Пример вызова функций инициализации
  // initSliders();
  // setupAccordions();

  // Бургер-меню для мобильной навигации
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('.header__nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('is-active');
      burger.classList.toggle('is-active');
    });
  }

  // Базовая обработка формы (заглушка)
  document.querySelectorAll('[data-form]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = form.querySelector('.contacts__form-message');
      if (message) {
        message.textContent = 'Спасибо! Ваша заявка отправлена (заглушка).';
        setTimeout(() => { message.textContent = ''; }, 3000);
      }
      form.reset();
    });
  });
});

// function initSliders() {
//   // ...логика для слайдеров
// }

// function setupAccordions() {
//   // ...логика для аккордеонов
// }
