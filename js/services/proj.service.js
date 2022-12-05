'use strict'
console.log('work')

const projectNames =['mine-sweeper','books-shop', 'touch-nums-game', 'ball-board-game', 'todo-list','chess-game']

var gProjects

_createProjects()

// console.log(gProjects)

function _createProject(id, name){
    return {
        id:id,
        name: name,
        title:'title',
        desc:'description',
        url:`https://ofergavrilov.github.io/proj-${name}`,
        publishedAt:144869394000,
        labels: ['title', 'description']
    }
}


function _createProjects() {
    var projects = []
    for (var i = 0; i < projectNames.length; i++){
        projects.push(_createProject(i ,projectNames[i]))
    }
    gProjects = projects
}

function getProjects() {
    return gProjects
}