//Добавить окно выигрыша/проигрыша,
//выбор сложности, уменьшить картинки, и добавить 54 колоду
//Лёгкий без проигрыша, нормальный с проигрышем(убывание счёта), сложный на время в зависимости от количества карт
//вот мне конечно заняться нечем пишу всякую фигню. наверно

const paramGame = {
    endGame: false,
    wait: true,
    isFirstClick: true,
    arrObj: [], //массив объектов
    twainCard: [], //массив пары карт
    finalListCard: [], //итоговый массив карт
    imgBlock: [],
    score: 0,
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
        if (paramGame.endGame)
            menuGame.querySelector('button').innerHTML = "ещё раз";//
        StartStop();
        ClearСlock();
        stopWatch.value = readout;
        scoreInput.innerText = "";

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

        paramGame.endGame = false;
        inputCount.value = null;
        menuGame.querySelector('button').disabled = true;
        displayElement(menuGame);

    }
}

checkCountPlace = () => {
    paramGame.cntPlace = parseInt(inputCount.value); //размер поля
    setTimeout(() => {
        if (paramGame.cntPlace % 2 > 0 || paramGame.cntPlace > parseInt(paramGame.value) * 2) {
            outputMsg('Введено нечетное число, либо число больше ' + parseInt(paramGame.value) * 2);
            return false;
        }
        if (window.matchMedia('(max-width: 360px)').matches && paramGame.cntPlace > 12) {
            outputMsg('Введено большое число для игры на смартфоне, используйте не более 12 карт');
            return false;
        }
        blurInput();
    }, 1000);
}

blurInput = () => {
    let btn = menuGame.querySelector('button');
    paramGame.arrObj = [];
    paramGame.checkElem = getCheckedElem(arrCheck); //возвращает выбранную размерность колоды
    paramGame.cntPlace = parseInt(inputCount.value); //размер поля

    if (!paramGame.cntPlace) {
        outputMsg('Введите размерность поля');
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

    if (window.matchMedia('(max-width: 360px)').matches && paramGame.cntPlace > 12) {
        outputMsg('Введено большое число для игры на смартфоне, используйте не более 12 карт');
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

startGame = () => {
    addElementsCards(paramGame.cntPlace);
    paramGame.imgBlock = tableGame.querySelectorAll('img'); //запись массива блоков изображений в html
    randomGetCard(); //получение массива случайных чисел без повторений
    displayElement(mainBlock);
}

displayElement = (childElement) => {
    const parent = childElement.parentNode;
    let child = parent.querySelectorAll('#' + parent.id +' > div');
    child.forEach(function (item) {
        if (item.id !== childElement.id)
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
}

addElementsCards = (cnt) => { //создание структуры html игрального поля
    for (let i = 0; i < cnt; i++) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.className = 'cards';

        createElements(tableGame, div); //создание блока изображения внутри ячейки
        div = tableGame.getElementsByClassName('cards')[i];
        createElements(div, img);
    }
}

createElements = (parent, element) => { //созадние элемента
    parent.appendChild(element);
    console.log('Добавлен ' + element + ' класса ' + element.className + ' в элемент ' + parent + ' класса ' + parent.className)
}

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
}

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
}

tableGame.onclick = (event) => {
    if (!paramGame.wait && event.target.localName === "img")
        if (paramGame.twainCard.length < 2) {
            //checkClick();
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

                    if (paramGame.twainCard[0].name === obj.name) {
                        paramGame.score += 100;
                        scoreInput.innerText = paramGame.score;
                        hideDoubleCards(paramGame.twainCard);
                        if (tableGame.getElementsByClassName('collapse').length === paramGame.imgBlock.length - 2) {
                            paramGame.wait = !paramGame.wait;
                            paramGame.endGame = !paramGame.endGame;
                            StartStop();
                            let messageScore = "ваш счёт: " + paramGame.score + " вы справились за: " + readout;
                            endGame.querySelector('p').innerHTML = messageScore;
                            endGame.style.display = 'flex';
                            settingsDiv.style.display = 'none';
                            setTimeout(() => {
                                settingsDiv.style.display = 'block';
                                endGame.style.display = 'none';
                            }, 5000);
                            newGame();
                            return false;
                        }
                    }
                    else {
                        paramGame.score -= 30;
                        scoreInput.innerText = paramGame.score;
                        paramGame.twainCard.forEach(function (item) {
                            flipChangeCards(item.img);
                        })
                    }
                }
            }
        }
}

/*checkClick = () => {
    setTimeout(() => {
        if (paramGame.twainCard.length < 2 && !paramGame.wait) {
            flipCard(paramGame.twainCard[0]);
            paramGame.wait = false;
            paramGame.twainCard = [];
            return false;
        }
    }, 10000);
}*/

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
    }, 0);
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
}

showAllCards = (cardsList) => {
    for (let i = 0; i < cardsList.length; i++) {
        cardsList[i].classList.remove('hide');
        cardsList[i].parentElement.classList.remove('collapse');
        cardsList[i].parentElement.classList.toggle('flipBack');
    }
}

flipChangeCards = (card, time = 800) => {
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
        StartStop();
    }, time);

}