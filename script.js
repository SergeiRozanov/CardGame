const cards = document.querySelector('.cards')
const cardsForm = document.querySelector('.cards__start');
const cardsFormBtn = document.querySelector('.cards__form-btn');
const cardsFormLevel = document.querySelectorAll('.cards__form-level');

cardsFormBtn.addEventListener('click', renderScreen);

function renderScreen(e) {
    e.preventDefault();

    cardsForm.classList.add('hiden');

    cardsFormLevel.forEach((checkedRadio) => {
        checkedRadio.addEventListener('click', (_e) => {
            switch (checkedRadio) {
                case this.value === 'easy':
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                case this.value === 'medium':
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                case this.value === 'hard':
                    renderGameCards(value);
                    window.localStorage.gameLevel = this.value;
                    break;

                default:
                    break;
            }
        });
    });
}
