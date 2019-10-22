// function handleFileSelect(evt) {
//     let workbook = XLSX.read(data, {type: 'binary'});
//     //Get the files from Upload control
//     let first_sheet_name = workbook.SheetNames[0];
//     let files = evt.target.files;
//     let i, f;
//     //Loop through files
//     for (let i = 0, f = files[i]; i != files.length; ++i) {
//         let reader = new FileReader();
//         let name = f.name;
//         reader.onload = function (evt) {
//             let data = evt.target.result;
//
//             let result;
//             /* convert from workbook to array of arrays */
//             let first_worksheet = data.Sheets[data.SheetNames[0]];
//             data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
//             alert(result[0].Column1);
//         };
//         reader.readAsArrayBuffer(f);
//     }
// }
let ct = 0;
let orderList = [];
let order = {};


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
            '       <input id="' + item.id + item.count + '" name="' + item.name + item.count + '" step="1" ' +
            '           min="' + item.min + '" max="' + item.max + '" onkeyup="countHoney(0)" type="number" placeholder="1">' +
            '       <input name="' + item.name + item.count + '" type="submit" class="miniBtn" value="+" ' +
            '           onclick="countHoney(1,\'' + item.id + item.count + '\')">' +
            '   </div>' +
            '   <input class="button" type="submit" value="Добавить к заказу" onclick="addOrder()">' +
            '</div></div>';

    });
    mainBlock.innerHTML += content;
}
const countHoney = (pre, id) => {
    let element = document.getElementById(id);
    let selected = orderList.indexOf(orderList.find(item => item.id.toString() === id.toString()));
    if (selected >= 0){
        order = orderList[selected];
        order.count += pre;
        element.value = order.count;
    }
    else {
        order.id = id;
        order.count = pre;
        orderList.push(order);
        element.value = order.count;
    }
};

const addOrder = () => {
    // ct++;
    //
    // document.getElementById('numberProduct').style.opacity = 1;
    // document.getElementById('numberProduct').innerText = ct;
};