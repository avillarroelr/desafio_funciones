document.getElementById('cubo1').addEventListener('click', function(){this.style.backgroundColor='black';});
document.getElementById('cubo2').addEventListener('click', function(){this.style.backgroundColor='black';});
document.getElementById('cubo3').addEventListener('click', function(){this.style.backgroundColor='black';});
document.getElementById('cubo4').addEventListener('click', function(){this.style.backgroundColor='black';});

document.addEventListener('keydown',function(event) {
    if (event.key === 'a') {
        color = 'pink';
        document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'lightblue';
        document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 'q') {
        let newDiv = document.createElement('div')
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'purple';
        newDiv.style.marginBottom = '5px';
        document.body.appendChild(newDiv);
    } else if (event.key === 'w') {
        let newDiv = document.createElement('div')
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'grey';
        newDiv.style.marginBottom = '5px';
        document.body.appendChild(newDiv);
    } else if (event.key === 'e') {
        let newDiv = document.createElement('div')
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'brown';
        newDiv.style.marginBottom = '5px';
        document.body.appendChild(newDiv);
    }

});