const justCircle = document.getElementById("window1")

const ctx = justCircle.getContext("2d")

ctx.beginPath()
ctx.arc(100, 40, 20, 0, 2 * Math.PI)
ctx.stroke()
