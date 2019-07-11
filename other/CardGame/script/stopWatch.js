const stopWatch = document.getElementById('stopWatch');

updateTime = () => {
    setTimeout(()=>{
        stopWatch.innerText = new Date().getSeconds();
    },1000)
}