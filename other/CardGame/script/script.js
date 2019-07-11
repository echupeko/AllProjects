const body = document.querySelector('body');
const menuGame = document.getElementById('menuGame'); //
const mainBlock = document.getElementById('mainBlock');
const tableGame = document.getElementById('tableBlock');
const inputCount = document.getElementById('placeSize');
const arrCheck = document.getElementsByName('checkBox');
const msg = document.getElementById('message');
const score = document.getElementById('score');
const paramGame = {
    wait: true,
    isFirstClick: true,
    arrObj: [], //массив объектов
    twainCard: [], //массив пары карт
    finalListCard: [], //итоговый массив карт
    imgBlock: [],
    cntPlace: null,
    changeCard: {},
    checkElem: {}
}

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

newGame = () => {
    if (!paramGame.wait) {
        for (let item in paramGame) {
            if (paramGame.hasOwnProperty(item)) {
                if (typeof paramGame[item] == 'object')
                    paramGame[item] = {Object: {}, Array: []}[paramGame[item].__proto__.constructor.name];
                else
                    paramGame[item] = {string: '', number: 0, boolean: true}[typeof paramGame[item]]; //зануление глобальных переменных
            }
        }

        let cntImg = tableGame.childNodes.length;
        if (cntImg) {
            for (let i = cntImg - 1; i >= 0; i--) {
                tableGame.removeChild(tableGame.childNodes[i]); //удаление всех дочерних элементов
            }
        }

        for (let i = 0; i < arrCheck.length; i++) {
            arrCheck[i].checked = false; //убираем выбор размерности колоды
        }

        inputCount.value = null;
        menuGame.querySelector('button').disabled = true;
        displayElement(menuGame.id);
    }
}

checkCountPlace = () => {
    paramGame.cntPlace = parseInt(inputCount.value); //размер поля
    setTimeout(()=>{
        if (paramGame.cntPlace % 2 > 0 || paramGame.cntPlace > parseInt(paramGame.value) * 2) {
            outputMsg('Введено нечетное число, либо число больше ' + parseInt(paramGame.value) * 2);
            return false;
        }
        blurInput();
    },1000);
}

blurInput = () => {
    let btn = menuGame.querySelector('button');
    paramGame.arrObj = [];
    paramGame.checkElem = getCheckedElem(arrCheck); //возвращает выбранную размерность колоды
    paramGame.cntPlace = parseInt(inputCount.value); //размер поля

    if (!paramGame.cntPlace) {
        outputMsg('Введите размерность поля')
        btn.disabled = true;
        return false;
    }

    if (!paramGame.checkElem) {
        outputMsg('Выберите число карт в колоде');
        btn.disabled = true;
        return false;
    }

    if (paramGame.cntPlace % 2 > 0 || paramGame.cntPlace > parseInt(paramGame.value) * 2) {
        outputMsg('Введено нечетное число, либо число больше ' + parseInt(paramGame.value) * 2);
        btn.disabled = true;
        return false;
    }

    btn.disabled = false;
}

outputMsg = (text) => {
    msg.classList.remove('hide');
    msg.classList.add('visible');
    msg.innerHTML = text;
    setTimeout(() => {
        msg.classList.remove('visible');
        msg.classList.add('hide');
    }, 3000);

}

function startGame() {
    addElementsCards(paramGame.cntPlace);
    paramGame.imgBlock = tableGame.querySelectorAll('img'); //запись массива блоков изображений в html

    randomGetCard(); //получение массива случайных чисел без повторений
    displayElement(mainBlock.id);
}

displayElement = (id) => {
    let child = body.querySelectorAll('body > div');
    child.forEach(function (item) {
        if (item.id !== id)
            item.style.display = 'none';
        else
            item.style.display = 'flex';
    });
}

getCheckedElem = (arr) => { //проверка выбранного элемента
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked)
            return arr[i]
    }
};

addElementsCards = (cnt) => { //создание структуры html игрального поля
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        tr.className = 'row';

        createElements(tableGame, tr); //создание строки
        tr = document.getElementsByClassName('row')[i];

        for (let j = 0; j < cnt / 3; j++) {
            let td = document.createElement('td');
            let div = document.createElement('div');
            let img = document.createElement('img');
            td.className = 'col';

            createElements(tr, td); //создание ячейки
            td = tr.getElementsByClassName('col')[j];
            createElements(td, div); //создание блока изображения внутри ячейки
            div = td.querySelector('div');
            createElements(div, img);
        }
    }
};

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
    console.log('Добавлен ' + element + ' класса ' + element.className + ' в элемент ' + parent + ' класса ' + parent.className)
};

randomGetCard = () => {
    const randomArr = getRandomArray(listCard.length, paramGame.cntPlace / 2); //массив карт для вывода размером с половину игрового поля cntPlace
    const fullArray = randomArr.concat(randomArr.slice(0)); //итоговый массив
    fullArray.sort(compareRandom);

    for (let i = 0; i < fullArray.length; i++) { //заполнение блоков изображений
        const cardName = listCard[fullArray[i]];
        const obj = {
            id: i,
            img: paramGame.imgBlock[i],
            click: false,
            path: 'resources/' + cardName + '.png',
            name: cardName
        };
        obj.img.src = obj.path;
        obj.img.dataset.id = i;
        paramGame.arrObj.push(obj);
    }
    showAllCards(paramGame.imgBlock);
    flipAllCards(paramGame.imgBlock);
};

compareRandom = (a, b) => {
    return Math.random() - 0.5;
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
};

tableGame.onclick = (event) => {
    if (!paramGame.wait && event.target.localName === "img")
        if (paramGame.twainCard.length < 2) {
            let arr = paramGame.arrObj.filter(obj => filterByID(obj, event.target));
            const obj = arr[0];

            if (paramGame.isFirstClick) {
                paramGame.twainCard.push(obj);
                flipCard(obj);
            }
            else {
                if (paramGame.twainCard[0] !== obj) {
                    paramGame.twainCard.push(obj);
                    flipCard(obj);
                    paramGame.wait = true;

                    if (paramGame.twainCard[0].name === obj.name){
                        hideDoubleCards(paramGame.twainCard)
                        score.innerText = "1000";
                    }
                    else {
                        paramGame.twainCard.forEach(function (item) {
                            flipChangeCards(item.img);
                        })
                    }
                }
            }
        }
};

function filterByID(obj, img) {
    if (obj.id.toString() === img.dataset.id) {
        return true;
    }
    return false;
}

hideDoubleCards = (arr) => {
    setTimeout(() => {
        arr.forEach(function (item) {
            item.img.parentElement.classList.add('collapse');
            item.img.parentElement.classList.toggle('flipBack');
        });
        paramGame.wait = false;
        paramGame.twainCard = [];
    }, 500);
}

function flipCard(obj) {
    changeCardVisible(obj.img); // переворот карты
    obj.click = !obj.click;
    paramGame.isFirstClick = !paramGame.isFirstClick;
    paramGame.changeCard = obj;
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

flipChangeCards = (card, time = 1500) => {
    setTimeout(() => {
        changeCardVisible(card);
        paramGame.wait = false;
        paramGame.twainCard = [];
    }, time);
}

flipAllCards = (cardsList, time = 5000) => {
    setTimeout(() => {
        for (let i = 0; i < cardsList.length; i++) {
            changeCardVisible(cardsList[i]);
        }
        paramGame.wait = false;
    }, time);

};