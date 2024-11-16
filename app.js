// Данные промокодов для магазинов
const promocodes = {
    yandex: [
        { code: "YANDEX10", description: "Скидка 10% на все товары!" },
        { code: "FREESHIP", description: "Бесплатная доставка!" }
    ],
    mega: [
        { code: "MEGA15", description: "Скидка 15% на первый заказ!" },
        { code: "WELCOME5", description: "Скидка 5% на любой товар!" }
    ],
    ozon: [
        { code: "OZON20", description: "Скидка 20% на электронику!" },
        { code: "SHIPFREE", description: "Бесплатная доставка на OZON!" }
    ]
};

// Функция отображения промокодов
function showPromoCodes(store) {
    const storeTitle = {
        yandex: "Яндекс Маркет",
        mega: "Мега Маркет",
        ozon: "OZON"
    };

    document.getElementById('store-title').textContent = storeTitle[store];
    const list = document.getElementById('promocode-list');
    list.innerHTML = ""; // Очистка списка

    // Заполнение списка промокодов
    promocodes[store].forEach(promo => {
        const listItem = document.createElement('li');
        listItem.textContent = `${promo.code} - ${promo.description}`;
        listItem.style.cursor = 'pointer'; // Добавляем стиль для указателя
        listItem.title = "Нажмите, чтобы скопировать"; // Подсказка при наведении

        // Добавляем обработчик клика для копирования
        listItem.addEventListener('click', () => copyToClipboard(promo.code));

        list.appendChild(listItem);
    });

    // Переход на экран с промокодами
    document.getElementById('stores').style.display = 'none';
    document.getElementById('promocodes').style.display = 'block';
}

// Функция возврата к выбору магазина
function goBack() {
    document.getElementById('stores').style.display = 'block';
    document.getElementById('promocodes').style.display = 'none';
}

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Промокод "${text}" скопирован в буфер обмена!`);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
        alert('Не удалось скопировать промокод. Пожалуйста, попробуйте еще раз.');
    });
}
