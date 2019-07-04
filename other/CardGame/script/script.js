const menuGame = document.getElementById('menu');
const mainBlock = document.getElementById('mainBlock');
const tableGame = document.getElementById('tableBlock');
const inputCount = document.getElementById('countImage');
const checkElem = document.getElementsByName('chck');
let finalListCart;
let imgBlock;
let cntPlace;

const listCard = [
    'C6', 'C7', 'C8', 'C9', 'C10', 'CJack', 'CQueen', 'CKing', 'CAce',
    'D6', 'D7', 'D8', 'D9', 'D10', 'DJack', 'DQueen', 'DKing', 'DAce',
    'H6', 'H7', 'H8', 'H9', 'H10', 'HJack', 'HQueen', 'HKing', 'HAce',
    'S6', 'S7', 'S8', 'S9', 'S10', 'SJack', 'SQueen', 'SKing', 'SAce',
];

const listCardMore = [
    'C2', 'C3', 'C4', 'C5',
    'D2', 'D3', 'D4', 'D5',
    'H2', 'H3', 'H4', 'H5',
    'S2', 'S3', 'S4', 'S5',
    'BlackJoker', 'RedJoker'
];

function startGame() {
    let check = getCheckedElem(checkElem); //возвращает выбранный элемент
    cntPlace = parseInt(inputCount.value); //размер поля

    if (!cntPlace) {
        alert('Введите размерность поля');
        return false;
    }

    if (!check) {
        alert('Выберите число карт в колоде');
        return false;
    }

    if (cntPlace % 2 > 0 || cntPlace > parseInt(check.value) * 2) {
        alert('Введено нечетное число, либо число больше ' + parseInt(check.value) * 2);
        return false;
    }
    let cnt = tableGame.childNodes.length;
    if (cnt) {
        for (let i = cnt-1; i >= 0; i--) {
            let child = tableGame.childNodes[i];
            tableGame.removeChild(child);
        }
        menuGame.style.display = 'flex'; //уйдёт в отдельную функцию
        mainBlock.style.display = 'none';
        return false;
    }

    addElementsCards(cntPlace);
    imgBlock = tableGame.querySelectorAll('img'); //запись массива блоков изображений в html

    menuGame.style.display = 'none'; //уйдёт в отдельную функцию
    mainBlock.style.display = 'flex';

    randomGetCard(); //получение массива случайных чисел без повторений
}

getCheckedElem = (arr) => { //проверка выбранного элемента
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked)
            return arr[i]
    }
};

addElementsCards = (cnt) => { //создание структуры html игрального поля
    for (let i = 0; i < cnt / (cnt / 4); i++) {
        let tr = document.createElement('tr');
        tr.className = 'row';

        createElements(tableGame, tr); //создание строки
        tr = document.getElementsByClassName('row')[i];

        for (let j = 0; j < cnt / 4; j++) {
            let td = document.createElement('td');
            let img = document.createElement('img');
            td.className = 'col';

            createElements(tr, td); //создание ячейки
            td = tr.getElementsByClassName('col')[j];
            createElements(td, img); //создание блока изображения внутри ячейки
        }
    }
};

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
    console.log('Добавлен ' + element + ' класса ' + element.className + ' в элемент ' + parent + ' класса ' + parent.className)
};

randomGetCard = () => {
    let max = listCard.length; //количество карт в массиве
    let arrObj = [];

    let randomArr = getRandomArray(max, cntPlace / 2); //массив карт для вывода размером с половину игрового поля cntPlace
    let fullArray = randomArr.concat(randomArr.slice(0));
    let arrPosition = getRandomArray(cntPlace, cntPlace); //массив положения карт

    let cntArr = arrPosition.length;
    for (let i = 0; i < cntArr; i++) { //заполнение блоков изображений
        let cardName = listCard[fullArray[i]];
        arrObj.push({
            id: arrPosition[i],
            path: 'resources/' + cardName + '.png',
            name: cardName
        });
        let obj = arrObj[i];
        imgBlock[obj.id].src = obj.path;
    }

    showAllCards(imgBlock);
    flipAllCards(imgBlock);
};

getRandomArray = (max = 0, length = 0) => { //получение рандомного массива
    let parseLength = Number.parseInt(length.toString());
    let parseMax = Number.parseInt(max.toString());
    let current, array = [];

    while (array.length !== parseLength) {
        current = Math.floor(Math.random() * parseMax);
        if (!array.includes(current)) {
            array.push(current);
        }
    }
    return array;
};

changeCheck = () => {
    let check = getCheckedElem(checkElem);
    //alert('Максимум карт: ' + parseInt(check.value) * 2);
};

tableGame.onclick = (event) => {
    let target = event.target;
    flipCard(target); // переворот карты 2
};

function flipCard(target) {
    changeCardVisible(target); // переворот карты
    target.dataset.tid = 'Card-flipped';
    isFirstClicked = !isFirstClicked;
}

changeCardVisible = (card) => {
    card.classList.toggle('hide');
    card.parentElement.classList.toggle('flipBack');
};

showAllCards = (cardsList) => {
    for (let i = 0; i < cardsList.length; i++) {
        cardsList[i].classList.remove('hide');
        cardsList[i].parentElement.classList.remove('collapse');
        cardsList[i].parentElement.classList.toggle('flipBack');
    }
};

flipAllCards = (cardsList, time = 5000) => {
    setTimeout(() => {
        for (let i = 0; i < cardsList.length; i++) {
            changeCardVisible(cardsList[i]);
        }
        wait = false;
    }, time);
};