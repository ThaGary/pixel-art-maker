var boxes = document.querySelectorAll('td')
var selection = document.querySelectorAll('.dot')

// selection
for (var i = 0; i < selection.length; i++) {
    selection[i].addEventListener("click", selector)
}

function selector(event) {
    for (var i = 0; i < selection.length; i++) {
        selection[i].style.border = '3px solid lightgray'
    }
    event.target.style.border = '3px solid black'
    color = event.target.id

}
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", colorchange)
}

function colorchange() {
    event.target.style.backgroundColor = color
}