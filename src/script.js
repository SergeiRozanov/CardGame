// eslint-disable-next-line no-unused-vars
const cards = document.querySelector('.cards');
const cardsForm = document.querySelector('.cards__start');
const cardsFormBtn = document.querySelector('.cards__form-btn');
const cardsFormLevel = document.querySelectorAll('.cards__form-level');
const cardsGame = document.querySelector('.cards__game');
const cardsGameBtn = document.querySelector('.cards__game-btn');
// eslint-disable-next-line no-unused-vars
const cardsGameGroup = document.querySelector('.cards__game-field').childNodes;
const cardsGameItem = document.querySelectorAll('.cards__game-item');

cardsFormBtn.addEventListener('click', renderScreen);

function renderScreen(e) {
    e.preventDefault();

    cardsForm.classList.add('hiden');
    cardsGame.classList.remove('hiden');

    setTimeout(() => {
        cardsGameItem.forEach((item) => {
            item.classList.add('defaultCard');
            // eslint-disable-next-line no-undef
            startTimer();
        });
    }, 5000);

    cardsFormLevel.forEach((checkedRadio) => {
        // eslint-disable-next-line no-unused-vars
        checkedRadio.addEventListener('click', (_e) => {
            switch (checkedRadio) {
                case this.value === 'easy':
                    // eslint-disable-next-line no-undef
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                case this.value === 'medium':
                    // eslint-disable-next-line no-undef
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                case this.value === 'hard':
                    // eslint-disable-next-line no-undef
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                default:
                    break;
            }
        });
    });
}

cardsGameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cardsGame.classList.add('hiden');
    cardsForm.classList.remove('hiden');
    // eslint-disable-next-line no-undef
    resetTimer();
    cardsGameItem.forEach((item) => {
        item.classList.remove('defaultCard');
    });
});
