function createPixels (numberofpixels){
    var mainCanvas = document.getElementById('canvas')
    for (var i = 0; i < numberofpixels; i++){
        let newPixel = document.createElement('div')
        newPixel.className = 'pixel'
        mainCanvas.appendChild(newPixel)
    }
}
createPixels(3136)

var boxes = document.querySelectorAll('.pixel')
var selection = document.querySelectorAll('.color')
var btn = document.querySelector('button')

function updateInput(color){
    document.getElementById("colorChoice").value = color;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', colorchange)
    }
    
    function colorchange(event) {
        event.target.style.backgroundColor = color
    }
}



btn.addEventListener('click', clear)
// clear function
function clear() {
    window.location.reload()
}

