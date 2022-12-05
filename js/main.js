'use strict'

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
          <div class="col-md-4 col-sm-6 portfolio-item" data-aos="flip-left" data-aos-duration="1200">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/${project.name}.png" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${project.title}</h4>
              <p class="text-muted">Illustration</p>
            `
    })

    $('.projects').html(strHtmls)
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
                <p>${project.desc}</p>
                  <button value="${project.url}" class="btn btn-info btn-link">Go to web</button>
                <ul class="list-inline">
                  <li>Date: ${myDate(project.publishedAt)}</li>
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

    $('.submit-btn').click(function(){
        const emailValue = $('.email-form').val()
        const subjectValue = $('.subject-form').val()
        const textAreaValue = $('.text-area-form').val()
        console.log(emailValue,subjectValue,textAreaValue)
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailValue}&su=${subjectValue}&b
        ody=${textAreaValue}`)
    })
}

function myDate(time) {
    const date = new Date(time)
    console.log(date)
    return `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()} `
}