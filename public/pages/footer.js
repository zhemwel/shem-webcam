"use strict"

const footerPage = () => {
	return `
		<div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <a href="#home" class="footer__link">
                        <h1 class="footer__title">Shemwel</h1>
                    </a>
                    <span class="footer__subtitle">Fullstack Developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#about" class="footer__link">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="https://zhemwel.net/" target="_blank" class="footer__link">Blog</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="https://facebook.com/zhemwel" target="_blank" class="footer__social">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/shemweldennis" target="_blank" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://twitter.com/shemweldennis" target="_blank" class="footer__social">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                </div>
            </div>

            <p class="footer__copy">&#169;  Shemwel. All right reserved</p>
        </div>
	`
}

