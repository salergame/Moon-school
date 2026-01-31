// --- Bilingual Logic ---

const translations = {
    en: {
        nav_about: "Why Moon School?",
        nav_courses: "Prices",
        nav_reviews: "Reviews",
        btn_login: "Log In",
        hero_title: "Speak English Confidently in 3 Months",
        hero_subtitle: "Interactive online lessons with native speakers. Start your journey to fluency today.",
        btn_free_lesson: "Book First Lesson",
        trust_text: "2,000+ happy students",
        adv_title: "Why Moonschool?",
        adv_1_title: "Student Motivation",
        adv_1_desc: "Kids earn currency for homework to spend at fairs.",
        adv_2_title: "Themed Parties",
        adv_2_desc: "We host exciting events like Halloween parties.",
        adv_3_title: "Proven Results",
        adv_3_desc: "Many students have successfully mastered the language.",
        adv_4_title: "Flexible Schedule",
        adv_4_desc: "Study early morning or late at night. You choose.",
        adv_teachers_title: "Professional Teachers",
        adv_teachers_desc: "Certified experts who passed IELTS with extensive experience.",
        adv_5_title: "Online Learning",
        adv_5_desc: "Learn comfortably from your home.",

        method_title: "We Offer",
        method_1: "Communicative Approach",
        method_2: "80% Speaking Practice",
        method_3: "Total Physical Response (TPR) for Kids",
        method_4: "Interactive Platform + Zoom Support",
        students_title: "Our Students",

        courses_title: "Our Prices",
        price_ge_title: "General English",
        price_ge_desc: "From A1 to B2.",
        price_ielts_title: "IELTS",
        price_ielts_desc: "Intensive Exam Prep.",

        price_ge_indiv: "Individual (12 lessons)",
        price_ge_pair: "Pair (8 lessons)",
        price_ge_group: "Group (12 lessons)",

        price_ielts_indiv: "Individual (12 lessons)",
        price_ielts_pair: "Pair (12 lessons)",
        price_ielts_group: "Group (12 lessons)",

        meta_duration: "1 Indiv = 60 min | 1 Group = 50 min",

        btn_details: "Book Now",
        contact_title: "Start Learning Today",
        contact_subtitle: "Contact us directly via WhatsApp or follow us on Instagram.",

        steps_title: "How It Works",
        step_1_title: "Free Testing",
        step_1_desc: "Take our quick online test to determine your exact level.",
        step_2_title: "Custom Plan",
        step_2_desc: "We build a schedule that fits your life and goals.",
        step_3_title: "Start Speaking",
        step_3_desc: "Join your first lesson and perform distinct speaking tasks.",

        faq_title: "Frequently Asked Questions",
        faq_1_q: "Can I pay monthly?",
        faq_1_a: "Yes! We offer flexible monthly payment options for all our courses.",
        faq_2_q: "What platform do you use?",
        faq_2_a: "We conduct lessons via Zoom. We currently do not use an interactive platform.",
        faq_3_q: "How do I cancel?",
        faq_3_a: "You can pause or cancel your subscription at any time with 24 hours notice.",
    },
    ru: {
        nav_about: "Почему Moon School?",
        nav_courses: "Цены",
        nav_reviews: "Отзывы",
        btn_login: "Войти",
        hero_title: "Заговорите на английском уверенно за три месяца",
        hero_subtitle: "Интерактивные онлайн-уроки с носителями. Начните свой путь к свободному общению сегодня.",
        btn_free_lesson: "Записаться на первый урок",
        trust_text: "2,000+ довольных студентов",
        adv_title: "Почему Moonschool?",
        adv_1_title: "Система Мотивации",
        adv_1_desc: "Дети зарабатывают валюту за успехи и тратят на ярмарках.",
        adv_2_title: "Тематические Вечеринки",
        adv_2_desc: "Мы устраиваем крутые праздники, например, Хэллоуин.",
        adv_3_title: "Результаты Обучения",
        adv_3_desc: "Множество наших студентов успешно выучили язык.",
        adv_4_title: "Гибкое расписание",
        adv_4_desc: "Учитесь рано утром или поздно вечером. Выбор за вами.",
        adv_teachers_title: "Профессиональные преподаватели",
        adv_teachers_desc: "Сертифицированные эксперты, сдавшие IELTS с большим опытом.",
        adv_5_title: "Онлайн Обучение",
        adv_5_desc: "Учитесь с комфортом из дома.",

        method_title: "Мы Предлагаем",
        method_1: "Коммуникативный Подход",
        method_2: "80% Разговорной Практики",
        method_3: "Метод Полного Физического Реагирования (TPR) для Детей",
        method_4: "Интерактивная Платформа + Поддержка Zoom",
        students_title: "Наши Студенты",

        courses_title: "Наши Цены",
        price_ge_title: "General English",
        price_ge_desc: "От A1 до B2.",
        price_ielts_title: "IELTS",
        price_ielts_desc: "Интенсивная подготовка.",

        price_ge_indiv: "Индивидуально (12 уроков)",
        price_ge_pair: "В паре (8 уроков)",
        price_ge_group: "В группе (12 уроков)",

        price_ielts_indiv: "Индивидуально (12 уроков)",
        price_ielts_pair: "В паре (12 уроков)",
        price_ielts_group: "В группе (12 уроков)",

        meta_duration: "1 Индив = 60 мин | 1 Групп = 50 мин",

        btn_details: "Записаться",
        contact_title: "Начните обучение сегодня",
        contact_subtitle: "Свяжитесь с нами через WhatsApp или подпишитесь в Instagram.",

        steps_title: "Как это работает",
        step_1_title: "Бесплатный тест",
        step_1_desc: "Пройдите быстрый онлайн-тест, чтобы определить ваш точный уровень.",
        step_2_title: "Личный план",
        step_2_desc: "Мы составим график, который подходит вашему образу жизни и целям.",
        step_3_title: "Начните говорить",
        step_3_desc: "Присоединяйтесь к первому уроку и выполняйте задания на говорение.",

        faq_title: "Частые вопросы",
        faq_1_q: "Можно платить помесячно?",
        faq_1_a: "Да! У нас есть гибкие варианты ежемесячной оплаты для всех курсов.",
        faq_2_q: "Какую платформу вы используете?",
        faq_2_a: "Мы проводим уроки в Zoom. Интерактивной платформы сейчас нет.",
        faq_3_q: "Как отменить обучение?",
        faq_3_a: "Вы можете приостановить или отменить подписку в любое время, предупредив за 24 часа.",
    }
};

let currentLang = 'ru';
const langToggleBtn = document.getElementById('lang-toggle');
const i18nElements = document.querySelectorAll('[data-i18n]');
const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

function updateContent() {
    langToggleBtn.innerText = currentLang === 'en' ? 'RU' : 'EN';

    // Update Text
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Update Placeholders
    i18nPlaceholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateContent();
});

// Run immediately to set initial text
updateContent();

// --- Scroll Active State & Animations ---
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');

// Observer for Section Navigation (Dots)
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Update Side Nav
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href') === `#${entry.target.id}`) {
                    dot.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 }); // High threshold for nav switching

sections.forEach(el => navObserver.observe(el));


// Observer for Element Appearance (Reveal on Scroll)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Remove class to allow re-animation when scrolling back up (Disappear)
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px" // Slightly shrink view to avoid edge popping
});

// Target all animated elements
const animatedElements = document.querySelectorAll(
    '.section-title, .adv-card, .step-card, .course-card, .faq-item, .hero-text, .hero-cta'
);
animatedElements.forEach(el => revealObserver.observe(el));

// --- FAQ Accordion ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});

// --- End of Script ---
