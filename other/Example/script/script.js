let as;
window.onload = () => {
    as = document.getElementById('as');
    as.style.height = 2 * screen.height + 'px';
}
window.onmousemove = () => {
    let y = -Math.floor((event.clientX - screen.width / 2) / 180);
    let x = Math.floor((event.clientY - screen.height / 2) / 90);
    as.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
}