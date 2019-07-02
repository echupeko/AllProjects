const menuGame = document.getElementById('menu');
const mainBlock = document.getElementById('mainBlock');
const tableGame = document.getElementById('tableBlock');
const inputCount = document.getElementById('countImage');
let imgBlock;
let count;

const listCard = [
    'C6', 'C7', 'C8', 'C9', 'C10', 'CJack', 'CQueen', 'CKing', 'CAce',
    'D6', 'D7', 'D8', 'D9', 'D10', 'DJack', 'DQueen', 'DKing', 'DAce',
    'H6', 'H7', 'H8', 'H9', 'H10', 'HJack', 'HQueen', 'HKing', 'HAce',
    'S6', 'S7', 'S8', 'S9', 'S10', 'SJack', 'SQueen', 'SKing', 'SAce',
];

startGame = () => {

    let countCard = listCard.length;
    count = parseInt(inputCount.value);

    if (count % 2 > 0 || count > countCard*2)
        alert('Введено нечетное число, либо число больше ' + countCard*2);
    else {
        addElementsCards(count);
        imgBlock = tableGame.querySelectorAll('img');
    }
    menuGame.style.visibility = 'hidden';
    mainBlock.style.visibility = 'visible';
    randomGetCard();
}

addElementsCards = (count) => {
    for (let i = 0; i < count /(count/4); i++) {
        let tr = document.createElement('tr');
        tr.className = 'row';

        createElements(tableGame,tr);
        tr = document.getElementsByClassName('row')[i];

        for (let j = 0; j < count / 4; j++) {
            let td = document.createElement('td');
            let img = document.createElement('img');
            td.className = 'col';

            createElements(tr,td);
            td = tr.getElementsByClassName('col')[j];
            createElements(td,img);
        }
    }
}

createElements = (parent, element) => {
  parent.appendChild(element);
  console.log('Добавлен ' + element + ' класса ' + element.className + ' в элемент ' + parent + ' класса ' + parent.className)
}

randomGetCard = () => {
    let max = listCard.length; //количество карт
    let arr = getRandomArray(max, count/2); //массив карт для вывода
    let arr2 = getRandomArray(count, count); //массив положения карт

    for (let i = 0; i < arr2.length/2; i++) { //заполнение карт
        imgBlock[arr2[i]].src = 'resources/' + listCard[arr[i]] + '.png';
        imgBlock[arr2[i+arr2.length/2]].src = 'resources/' + listCard[arr[i]] + '.png';
    }

    showAllCards(imgBlock);
    flipAllCards(imgBlock);
}

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
}

changeCardVisible = (card) => {
    card.classList.toggle('hide');
    card.parentElement.classList.toggle('flipBack');
}

showAllCards = (cardsList) => {
    for (let i = 0; i < cardsList.length; i++) {
        cardsList[i].classList.remove('hide');
        cardsList[i].parentElement.classList.remove('collapse');
        cardsList[i].parentElement.classList.toggle('flipBack');
    }
}

flipAllCards = (cardsList, time = 5000) => {
    setTimeout(() => {
        for (let i = 0; i < cardsList.length; i++) {
            changeCardVisible(cardsList[i]);
        }
        wait = false;
    }, time);
}