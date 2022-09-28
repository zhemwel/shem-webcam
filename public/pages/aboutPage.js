"use strict"

const aboutPage = () => {
	return `
		<h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My Introduction</span>

        <div class="about__container container grid">
            <img src="img/about.jpg" alt="" class="about__img">

            <div class="about__data">
                <p class="about__description">
                    Web Developer, with extensive knowledge and years of experience,
                    working in web technologies.
                </p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">3+</span>
                        <span class="about__info-name">Years <br> experience</span>
                    </div>

                    <div>
                        <span class="about__info-title">3+</span>
                        <span class="about__info-name">Completed <br> project</span>
                    </div>

                    <div>
                        <span class="about__info-title">6</span>
                        <span class="about__info-name">Companies <br> worked</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a download="" href="pdf/CV.pdf" class="button button--flex">
                        Download CV  <i class="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>
	`
}

