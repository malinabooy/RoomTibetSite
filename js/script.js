document.querySelectorAll('.heading__dropDown').forEach(function (dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.heading__dropDownBtn');
    const dropDownList = dropDownWrapper.querySelector('.heading__dropDownList');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.heading__dropDownListItem');
    const dropDownInputHidden = dropDownWrapper.querySelector('.heading__dropDownInputHidden');
    const upDownIcon = dropDownWrapper.querySelector('.heading__upDownIcon');
    const labelNearForm = dropDownWrapper.querySelector('.heading__labelNearForm');


    //клик по кнопке
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('heading__dropDownList_visible');
        this.classList.toggle('heading__dropDownBtn_active');
        upDownIcon.classList.toggle('heading__upDownIcon_active');
        labelNearForm.classList.toggle('heading__labelNearForm_active');
    });

    //клик по элементу списка
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (event) {
            event.stopPropagation();

            // Получаем текстовое содержимое элемента списка
            const listItemText = this.innerText.trim();

            // Проверяем, есть ли текстовое содержимое
            if (listItemText) {
                dropDownBtn.innerText = listItemText;
            } else {
                // Если текстового содержимого нет, используем альтернативное значение
                dropDownBtn.innerText = 'Выберите';
            }

            dropDownBtn.focus();
            dropDownInputHidden.value = this.dataset.value;
            dropDownList.classList.remove('heading__dropDownList_visible');
            labelNearForm.classList.remove('heading__labelNearForm_active');
        });
    });

    //Клик снаружи
    document.addEventListener('click', function (event) {
        if (event.target !== dropDownBtn) {
            dropDownBtn.classList.remove('heading__dropDownBtn_active');
            upDownIcon.classList.remove('heading__upDownIcon_active');
            labelNearForm.classList.remove('heading__labelNearForm_active');
            dropDownList.classList.remove('heading__dropDownList_visible');
        }
    });

    //Нажатие таб или эскейп
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab' || event.key === 'Escape') {
            dropDownBtn.classList.remove('heading__dropDownBtn_active');
            upDownIcon.classList.remove('heading__upDownIcon_active');
            labelNearForm.classList.remove('heading__labelNearForm_active');
            dropDownList.classList.remove('heading__dropDownList_visible');
        }
    });
});

//Выбор дат
const inputDateForm = document.querySelector('.heading__inputDateForm');
const labelNearDate = document.querySelector('.heading__labelNearDate');

var picker = new Lightpick({
    field: document.getElementById('datepicker'),
    singleDate: false,
    lang: 'ru',
    locale: {
        tooltip: {
            one: 'день',
            few: 'дня',
            many: 'дней',
        },
        pluralize: function (i, locale) {
            if ('one' in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
            if ('few' in locale && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return locale.few;
            if ('many' in locale && (i % 10 === 0 || i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)) return locale.many;
            if ('other' in locale) return locale.other;

            return '';
        }
    }
});
inputDateForm.addEventListener('click', function () {
    inputDateForm.classList.toggle('heading__inputDateForm_active');
});

const lightpick = document.querySelector('.lightpick');

// Создаем новый экземпляр MutationObserver
const observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            // Проверяем, является ли lightpick скрытым
            if (lightpick.classList.contains('is-hidden')) {
                // Если lightpick скрыт, удаляем класс .heading__labelNearDate_active
                labelNearDate.classList.remove('heading__labelNearDate_active');
            } else {
                // Если lightpick не скрыт, добавляем класс .heading__labelNearDate_active
                labelNearDate.classList.add('heading__labelNearDate_active');
            }
        }
    }
});

// Настраиваем MutationObserver для отслеживания изменений в атрибутах lightpick
observer.observe(lightpick, { attributes: true });


function playPause() {
    var video = document.getElementById("my_video");
    if (video.paused) {
        video.play();
        document.querySelector('.aboutHike__playBtn').style.display = 'none';
    } else {
        video.pause();
        document.querySelector('.aboutHike__playBtn').style.display = 'block';
    }
}


document.querySelectorAll('.popularDirection__tour').forEach(function (rankHidden) {
    const tour = rankHidden.querySelector('.popularDirection__pullTour');
    const blockWithRank = rankHidden.querySelector('.popularDirection__blockWithRank');

    tour.addEventListener('mouseover', function () {
        blockWithRank.classList.add('hidden');
    });

    tour.addEventListener('mouseout', function () {
        blockWithRank.classList.remove('hidden');
    });
});


const linkServices = document.querySelectorAll('.pageFooter__linkService');
const randomIndex = Math.floor(Math.random() * linkServices.length);
const randomLink = linkServices[randomIndex];

const modalNew = document.createElement('span');
modalNew.classList.add('pageFooter__modalNew');
modalNew.textContent = 'new';

randomLink.parentNode.insertBefore(modalNew, randomLink.nextSibling);

modalNew.style.visibility = 'visible';