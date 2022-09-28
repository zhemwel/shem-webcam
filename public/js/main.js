"use strict"

const min = (a) => {
    "use strict"
    if (a === undefined) return a
    return a.replace(/[\n\r\t]/g, "").replace(/\s{2,}/g, " ")
}

const initMainPage = async () => {
    const $home = $("#home")
    const $about = $("#about")
    const $skills = $("#skills")
    const $qualification = $("#qualification")
    // const $services = $("#services")
    const $portfolio = $("#portfolio")
    const $project = $("#project")
    // const $testimonial = $("#testimonial")
    const $contact = $("#contact")
    const $footer = $("#footer")

    $home.html(min(homePage()))
    $about.html(min(aboutPage()))
    $skills.html(min(skillsPage()))
    $qualification.html(min(qualificationPage()))
    // $services.html(min(servicesPage()))
    $portfolio.html(min(portfolioPage()))
    $project.html(min(projectPage()))
    // $testimonial.html(min(testimonialPage()))
    $contact.html(min(contactPage()))
    $footer.html(min(footerPage()))

    await allFunction()
    swiperStart()
}

const init = async () => {
    const $header = $("#header")
    const $app = $("#app")

    $header.html(min(headerPage()))
    $app.html(min(mainPage()))

    await initMainPage()
}

init()