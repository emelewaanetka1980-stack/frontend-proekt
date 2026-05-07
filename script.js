document.addEventListener("DOMContentLoaded", () => {

    // ========== PORTFOLIO SLIDER ==========
    const portfolioTrack = document.querySelector(".portfolio__track");
    const portfolioPrev = document.querySelector(".portfolio__arrow--prev");
    const portfolioNext = document.querySelector(".portfolio__arrow--next");
    const portfolioCards = document.querySelectorAll(".portfolio__card");
    const portfolioCounter = document.querySelector(".portfolio__counter");
    const portfolioProgress = document.querySelector(".portfolio__progress-bar");

    if (portfolioTrack && portfolioPrev && portfolioNext && portfolioCards.length) {
        let portfolioIndex = 0;
        const visibleCards = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
        const totalSteps = portfolioCards.length - visibleCards + 1;

        function updatePortfolioSlider() {
            const cardWidth = portfolioCards[0].offsetWidth;
            const gap = 24;

            portfolioTrack.style.transform = `translateX(-${portfolioIndex * (cardWidth + gap)}px)`;
            portfolioTrack.style.transition = 'transform 0.4s ease';

            if (portfolioCounter) {
                portfolioCounter.innerHTML = `${String(portfolioIndex + 1).padStart(2, "0")}<span class="portfolio__counter-total">/${String(totalSteps).padStart(2, "0")}</span>`;
            }

            if (portfolioProgress) {
                portfolioProgress.style.width = `${((portfolioIndex + 1) / totalSteps) * 100}%`;
            }
        }

        portfolioNext.addEventListener("click", () => {
            if (portfolioIndex >= totalSteps - 1) {
                portfolioIndex = 0;
            } else {
                portfolioIndex++;
            }
            updatePortfolioSlider();
        });

        portfolioPrev.addEventListener("click", () => {
            if (portfolioIndex <= 0) {
                portfolioIndex = totalSteps - 1;
            } else {
                portfolioIndex--;
            }
            updatePortfolioSlider();
        });

        updatePortfolioSlider();
    }

    // ========== PARTNERS SLIDER ==========
    const partnersTrack = document.querySelector(".partners__track");
    const partnersPrev = document.querySelector(".partners__arrow--prev");
    const partnersNext = document.querySelector(".partners__arrow--next");
    const partnersCards = document.querySelectorAll(".partners__card");
    const partnersCounter = document.querySelector(".partners__pagination span");
    const partnersProgress = document.querySelector(".partners__progress");

    if (partnersTrack && partnersPrev && partnersNext && partnersCards.length) {
        let partnersIndex = 0;

        function updatePartnersSlider() {
            partnersTrack.style.transform = `translateX(-${partnersIndex * 100}%)`;

            if (partnersCounter) {
                partnersCounter.textContent = `${String(partnersIndex + 1).padStart(2, "0")}/${String(partnersCards.length).padStart(2, "0")}`;
            }

            if (partnersProgress) {
                partnersProgress.style.width = `${((partnersIndex + 1) / partnersCards.length) * 100}%`;
            }
        }

        partnersNext.addEventListener("click", () => {
            partnersIndex = partnersIndex >= partnersCards.length - 1 ? 0 : partnersIndex + 1;
            updatePartnersSlider();
        });

        partnersPrev.addEventListener("click", () => {
            partnersIndex = partnersIndex <= 0 ? partnersCards.length - 1 : partnersIndex - 1;
            updatePartnersSlider();
        });

        updatePartnersSlider();
    }

    // ========== FAQ ==========
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq__question");
        const icon = item.querySelector(".faq__icon");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
            if (icon) {
                icon.textContent = item.classList.contains("active") ? "⌃" : "⌄";
            }
        });
    });

    // ========== ВАЛИДАЦИЯ ФОРМ ==========
    document.querySelectorAll('form').forEach(form => {
        const input = form.querySelector('input[type="tel"], .footer__input, .start-project__input');
        const submit = form.querySelector('button[type="submit"], .footer__submit, .start-project__submit');

        if (!input || !submit) return;

        const error = document.createElement('p');
        error.className = 'form__error';
        error.textContent = 'Пожалуйста, введите номер телефона';
        input.parentNode.insertBefore(error, input.nextSibling);

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            if (input.value.trim() === '') {
                input.classList.add('input--error');
                error.classList.add('form__error--visible');
            } else {
                input.classList.remove('input--error');
                error.classList.remove('form__error--visible');
            }
        });

        input.addEventListener('input', () => {
            input.classList.remove('input--error');
            error.classList.remove('form__error--visible');
        });
    });

    // ========== БУРГЕР ==========
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-menu__link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }

});