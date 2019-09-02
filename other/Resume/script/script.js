const headerBlock = document.querySelector('header');

window.onload = function (){
    headerBlock.innerHTML = ('<ul>' + (() => {contentArr.forEach(item => '<li>' + item.description + '</li>')}) + '</ul>');

}
