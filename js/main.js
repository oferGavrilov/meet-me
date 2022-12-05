'use strict'
console.log('Starting up');

$(document).ready(init())

function init() {
    renderProjects()
    renderModals()
    addEventListeners()
}


function renderProjects() {
    var projects = getProjects()
    console.log(projects)
    var strHtmls = projects.map(project => {
        return `
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/${project.name}.png" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">Illustration</p>
            `
    })

    $('.portfolio').html(strHtmls)
}

function renderModals() {
    var project = getProjects()
    var strHtmls = project.map(project => {
        return `
    <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body pop">
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/${project.name}.png" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <button value="${project.url}" class="btn btn-info btn-link">Go to web</button>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        `
    })
    $('.modal-container').append(strHtmls)
}

function addEventListeners() {
    $('.btn-link').click(function(){
        console.log(this.value)
        window.open(this.value, '_blank')
    })
}