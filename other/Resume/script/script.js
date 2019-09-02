const headerBlock = document.querySelector('header');

window.onload = function (){
    headerBlock.innerHTML = ("" +
        "<ul>" + (() => {contentArr.for()}) + "<li></li>" + "</ul>");

}
