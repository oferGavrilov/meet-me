'use strict'
console.log('work')

const projectNames =['mine-sweeper','books-shop', 'touch-nums-game', 'ball-board-game', 'todo-list','chess-game']

var gProjects

_createProjects()

// console.log(gProjects)

function _createProject(id, name,title,desc,url,publishedAt){
    return {
        id,
        name,
        title,
        desc,
        url:`https://ofergavrilov.github.io/proj-${url}`,
        publishedAt: Date.parse(new Date(publishedAt)),
        labels: ['title', 'description']
    }
}


function _createProjects() {
    var projects = [
        _createProject('minesweeper', 'mine-sweeper','Mine Sweeper', 'Mine sweeper game My first project developed by basic css and java script vanilla', 'mine-sweeper', '2022-12-4'),
        _createProject('books-shop', 'books-shop','Book Shop', 'Book shop web using css3 and java script vanilla', 'books-shop', '2022-12-5'),
        _createProject('touch-nums-game', 'touch-nums-game','Touch nums game', 'touch nums game using basic java script vanilla', 'touch-nums-game', '2022-12-5'),
        _createProject('ball-board-game', 'ball-board-game','Ball Board', 'Ball board game using basic css and java script vanilla', 'ball-board-game', '2022-12-5'),
        _createProject('todo-list', 'todo-list','Todo list', 'todo list app using basic bootstrap library and javascript vanilla', 'todo-list', '2022-12-5'),
        _createProject('chess-game', 'chess-game','Chess game', 'chess game using basic java script vanilla', 'chess-game', '2022-12-5'),
    ]
    
    gProjects = projects
}

function getProjects() {
    return gProjects
}

function getDate() {

}