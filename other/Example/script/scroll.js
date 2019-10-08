// window.onmousewheel = () => { //обрабатываем события для колёсика мыши
//     if (event.wheelDelta > 0)
//         preScroll(-1);
//     else if (event.wheelDelta < 0)
//         preScroll(1);
// };

window.onmousewheel = () => { //обрабатываем события для колёсика мыши

    if (event.wheelDelta > 0)//скроллим вверх
        selectBlock--;
    else if (event.wheelDelta < 0)//скроллим вниз
        selectBlock++;

    scrollingTo(blockArray[selectBlock] + '-block');
};

window.onkeydown = () => { //обрабатываем нажатия кнопок
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let countBlock = blockArray.length; //кол-во блоков всего
    if (event.code === 'PageUp') {
        //scrollBlock(selectBlock, --selectBlock, 1); //скроллим вверх
        preScroll(-1);
    }
    else if (event.code === 'PageDown') {
        //scrollBlock(selectBlock, ++selectBlock, 1); //скроллим вниз
        preScroll(1);
    }
    else if (event.code === 'Home') {
        //scrollBlock(countBlock - 1, 0, countBlock - 1); //скроллим в начало
        preScroll(0 - selectBlock);
    }
    else if (event.code === 'End') {
        //scrollBlock(selectBlock, countBlock - 1, countBlock - selectBlock - 1); //скроллим в конец
        preScroll(countBlock - selectBlock - 1);
    }
};

main.ontouchstart = () => { //сохраняем точку касания на смартфоне
    initialPoint = event.changedTouches[0];
};

main.ontouchend = () => { //смотрим направление движения пальца
    finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs < yAbs) {
            if (!isOpenMenu) {
                if (finalPoint.pageY > initialPoint.pageY) {
                    //alert('up');
                    preScroll(-1);
                }
                else if (finalPoint.pageY < initialPoint.pageY) {
                    //alert('down');
                    preScroll(1);
                }
            }
        }
        else {
            if (finalPoint.pageX > initialPoint.pageX) {
                //alert('right');
                openMenu();
            }
            else {
                //alert('left');
                openMenu();
            }
        }

    }
};

const scrollingTo = (to) => { //скорллинг до указанного места
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    let finalBlock = blockArray.indexOf(blockArray.find(item => item.id === to));

    if (finalBlock !== selectBlock) {
        preScroll(finalBlock - selectBlock);
        if (isOpenMenu) //скрываем меню навигации
            openMenu();
    }
};

const preScroll = (countBlock) => {
    selectBlock = blockArray.indexOf(blockArray.find(item => item.selected === true)); //текущий блок
    scrollBlock(selectBlock, countBlock);
};

const scrollBlock = (startBlock, countBlock) => {
    //1 параметр начальная точка/текущий блок
    //2 параметр количество блоков
    let mainPosition = document.querySelector('main').offsetTop; //позиция главного блока
    let index;

    if (mainPosition % window.innerHeight === 0) {
        let timeNow = new Date().getTime();
        let quietPeriod = 500;

        if (timeNow - lastAnimation < quietPeriod) {
            return;
        }

        index = startBlock + countBlock;
        if (index >= 0 && index < blockArray.length) {
            for (let i = 0; i < blockArray.length; i++) {
                if ((index) === i) {
                    blockArray[i].selected = true; //делаем пометку
                    blockArray[i].list.querySelector('span').classList.add('selected');
                }
                else {
                    blockArray[i].selected = false; //остальные снимаем
                    blockArray[i].list.querySelector('span').classList.remove('selected');
                }
            }
            selectBlock = index;
        }


        if (countBlock < 0) { //вверх
            if (mainPosition !== 0) { //если не вверху
                scrollEngine(mainPosition, countBlock);
            }
            else
                return;
        }
        else if (countBlock > 0) { //вниз
            if (mainPosition !== -(contentArr.length - 1) * window.innerHeight) { //если не в конце
                scrollEngine(mainPosition, countBlock);
            }
            else
                return;
        }

        lastAnimation = timeNow;
    }

};

const scrollEngine = (mainPosition, countBlock) => {
    document.querySelector('body').scrollY = mainPosition + (-countBlock) * window.innerHeight + 'px';
    main.style.top = mainPosition + (-countBlock) * window.innerHeight + 'px';
    bwTheme(blockArray[selectBlock].theme);
    console.log('scrolled ' + ((countBlock > 0) ? 'down' : 'up'));
};