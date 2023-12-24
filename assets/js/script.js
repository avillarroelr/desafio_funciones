function pintar (event, color = 'green'){
    event.style.backgroundColor = color
}
const ele = document.getElementById('ele1')
ele.addEventListener('click',function() {
    pintar(ele, 'yellow')
})
pintar(ele);

