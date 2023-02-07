let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let intervalId;

let predicts = {
    1: 'Ты будешь богатым', 
    2: 'Ты будешь счастливым',
    3: 'Ты будешь жить долго',
    4: 'Ты купишь новый дом',
    5: 'Ты выиграешь в лотерею',
    6: 'Тебя ждет приятный сюрприз',
    7: 'Ты отправишься в путешествие',
    8: 'Сегодня вы рискуете что-нибудь забыть при выходе из дома',
    9: 'Не выходи сегодня из дома',
    10: 'Остерегайся мошенников',
}
start.addEventListener('click', function runInterval() {
    counter = 1;
    timer.textContent = counter;
    intervalId = setInterval(function() {
        counter++;
        timer.textContent = counter;
        if (counter === 11) {
            clearInterval(intervalId);
            
            runInterval(intervalId);
        }
    }, 100)
    start.classList.remove('active');
    stop.classList.add('active');
});

stop.addEventListener('click', function() {
    stop.classList.remove('active');

    let result = counter;
    clearInterval(intervalId);
    if (result > 1 && result <=7) {
        text.classList.add('good');

    } else if (result > 7 && result <= 10) {
        text.classList.add('bad');
    }
    text.textContent = predicts[result];
})
