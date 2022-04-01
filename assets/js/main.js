var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.querySelector('.btn')
var colorTxt = document.querySelector('.color-txt')

btn.addEventListener('click', function(){
    var randomColor = generateRandomColor()

    document.body.style.backgroundColor = colors[randomColor]
    colorTxt.innerHTML = colors[randomColor]
})


function generateRandomColor(){
    return Math.floor(Math.random()*colors.length)
}