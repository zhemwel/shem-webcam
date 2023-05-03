"use strict"

const projectPage = () => {
	return `
		<div class="project__bg">
            <div class="project__container container grid">
                <div class="project__data">
                    <h2 class="project__title">You have a new project</h2>
                    <a href="#contact" class="button button--flex-custom button--white">
                        Contact Me
                        <i class="uil uil-message project__icon button__icon"></i>
                    </a>
                    <p class="project__description"></p>
                    <a href="https://wa.me/6282315400512?text=Saya%20Ingin%20Membuat%20Project" target="_blank" class="button button--flex button--white">
                        WhatsApp Me
                        <i class="uil uil-whatsapp project__icon button__icon"></i>
                    </a>
                </div>

                <img src="img/project.png" alt="" class="project__img">
            </div>
        </div>
	`
}

