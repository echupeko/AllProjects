const tableGame = document.getElementById('tableBlock');
let imgBlock;
let count = 0;

const listCard = [
    'C6', 'C7', 'C8', 'C9', 'C10', 'CJack', 'CQueen', 'CKing', 'CAce',
    'D6', 'D7', 'D8', 'D9', 'D10', 'DJack', 'DQueen', 'DKing', 'DAce',
    'H6', 'H7', 'H8', 'H9', 'H10', 'HJack', 'HQueen', 'HKing', 'HAce',
    'S6', 'S7', 'S8', 'S9', 'S10', 'SJack', 'SQueen', 'SKing', 'SAce',
];

startGame = () => {
    count = prompt('Введите четное количество элементов', 12);
    if (count % 2 > 0) {
        alert('Введено нечетное число');
    }
    else {
        for (let i = 0; i < count /(count/4); i++) {
            let tr = document.createElement('tr');

            tableGame.appendChild(tr);

            tr.className = 'row';
            tr = document.getElementsByClassName('row')[i];

            for (let j = 0; j < count / 4; j++) {
                let td = document.createElement('td');
                let img = document.createElement('img');

                tr.appendChild(td);
                td.className = 'col';
                td = tr.getElementsByClassName('col')[j];
                td.appendChild(img);
            }
        }
        imgBlock = tableGame.querySelectorAll('img')
    }
}

startGame()


randomGetCard = () => {
    let max = listCard.length;
    let arr = getRandomArray(max, count/2);
    let arr2 = getRandomArray(count, count)

    for (let i = 0; i < arr2.length/2; i++) {
        imgBlock[arr2[i]].src = 'resources/' + listCard[arr[i]] + '.png';
        imgBlock[arr2[i+arr2.length/2]].src = 'resources/' + listCard[arr[i]] + '.png';
    }

}

function changeCardVisible(card) {
    card.classList.toggle('hide');
    card.parentElement.classList.toggle('flipBack');
}

function getRandomArray(max = 0, length = 0) {
    let parseLength = Number.parseInt(length.toString());
    let parseMax = Number.parseInt(max.toString());

    // if (Number.isNaN(parseLength) || Number.isNaN(parseMax)) return [];
    // if (parseLength < 0 || parseMax < 0 || parseLength >= parseMax) return [];

    let current, array = [];

    while (array.length !== parseLength) {
        current = Math.floor(Math.random() * parseMax);
        if (!array.includes(current)) {
            array.push(current);
        }
    }
    return array;
}

