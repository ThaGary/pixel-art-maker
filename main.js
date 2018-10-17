// variables
var boxes = document.querySelectorAll('td')
var selection = document.querySelectorAll('.dot')
var btn = document.querySelector('button')
// color selector
for (var i = 0; i < selection.length; i++) {
    selection[i].addEventListener('click', selector)
}
// color selector function
function selector(event) {
    for (var i = 0; i < selection.length; i++) {
        selection[i].style.border = '3px solid lightgray'
    }
    event.target.style.border = '3px solid black'
    color = event.target.id
}
// box selection
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', colorchange)
}
// box color changer
function colorchange(event) {
    event.target.style.backgroundColor = color
}
// clear eventlistener
btn.addEventListener('click', clear)
// clear function
function clear() {
    window.location.reload()
}