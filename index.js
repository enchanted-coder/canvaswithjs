const canvas = document.getElementById("window1")
const ctx = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

window.addEventListener("resize", function(){
    canvas.width = innerWidth
    canvas.height = innerHeight
    drawCircle()
})

const mouse = {
    x: undefined,
    y: undefined,
}

//canvas.addEventListener("click", function(event){
//    mouse.x = event.x
//    mouse.y = event.y
//    drawCircle();
//})

canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x
    mouse.y = event.y
    drawCircle()
})


function drawCircle(){    
    ctx.fillStyle = "#689d6a"
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2)
    ctx.fill()
}

drawCircle()
