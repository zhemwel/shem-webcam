"use strict"

const footerPage = () => {
	return `
		<div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">Shemwel</h1>
                    <span class="footer__subtitle">Fullstack Developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#home" class="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">Contact&nbsp;Me</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://facebook.com/" target="_blank" class="footer__social">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/" target="_blank" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" class="footer__social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>

            <p class="footer__copy">&#169;  Shemwel. All right reserved</p>
        </div>
	`
}

