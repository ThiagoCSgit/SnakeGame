import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, 
snakeIntersection, getSnakeHead} from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime){
    if(gameOver){
        alert('Peeeeeerrrdeeeeeuuuu')
        if(confirm('Perdeu cara. Press ok to reiniciar')){
            document.location.reload(true)
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
        return

    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
