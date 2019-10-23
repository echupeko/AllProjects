let countOrder = 0;
let orderList = [];
let order = {};
let openBasketFlag = false;
const sectionList = document.getElementsByTagName('section');

window.onload = () => {
    const mainBlock = document.getElementById('contentBlock');
    let content = "";
    honeyList.forEach(item => {
        content += '<div class="block">' +
            '<div class="info">' +
            '   <h3>Мёд ' + item.name + ' ' + item.count + 'л.</h3>' +
            '   <img src="source/bochka.png">' +
            '   <p class="description-honey">' + item.description + '</p>' +
            '   <p>цена: ' + item.price + ' руб.</p>' +
            '</div>' +
            '<div class="control">' +
            '   <div>' +
            '       <input name="' + item.name + item.count + '" type="submit" class="miniBtn" value="-" ' +
            '           onclick="countHoney(-1,\'' + item.id + item.count + '\')">' +
            '       <input id="' + item.id + item.count + '" name="' + item.name + item.count + '" step="1" value="1"' +
            '           min="' + item.min + '" max="' + item.max + '" onkeyup="countHoney(0)" type="number">' +
            '       <input name="' + item.name + item.count + '" type="submit" class="miniBtn" value="+" ' +
            '           onclick="countHoney(1,\'' + item.id + item.count + '\')">' +
            '   </div>' +
            '   <input class="button" type="submit" value="Добавить к заказу" onclick="addOrder(\'' + item.id + item.count + '\')">' +
            '</div></div>';

    });
    mainBlock.innerHTML += content;
}


const countHoney = (pre, id) => {
    let element = document.getElementById(id);
    let selected = orderList.indexOf(orderList.find(item => item.id.toString() === id.toString()));

    if (selected >= 0) {
        orderList[selected].count += pre;
        element.value = orderList[selected].count;
    }
    else {
        order = {};
        order.id = id;
        order.count = +element.value + pre;
        order.buy = false;
        orderList.push(order);
        element.value = order.count;
    }
};

const addOrder = (id) => {
    let element = document.getElementById(id);
    let selected = orderList.indexOf(orderList.find(item => item.id.toString() === id.toString()));

    if (!orderList[selected].buy) {
        countOrder++;
        document.getElementById('numberProduct').style.opacity = 1;
        document.getElementById('numberProduct').innerText = countOrder;
        orderList[selected].buy = !orderList[selected].buy;
    }
    else {
        element.value = 1;
    }
};

const openBasket = () => {
    for (let i = 0; i < sectionList.length; i++) {
        if (!openBasketFlag) {
            if (sectionList[i].id === 'basket')
                sectionList[i].style.display = 'flex';
            else
                sectionList[i].style.display = 'none';
        }
        else {
            if (sectionList[i].id === 'basket')
                sectionList[i].style.display = 'none';
            else
                sectionList[i].style.display = 'flex';
        }
    }
    openBasketFlag = !openBasketFlag;
}