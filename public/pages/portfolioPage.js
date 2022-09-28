"use strict"

const portfolioPage = () => {
	return `
		<h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent work</span>

        <div class="portfolio__container container swiper-container">
            <div class="swiper-wrapper">
                <!--==================== PORTFOLIO 1 ====================-->
                <div class="portfolio__content grid swiper-slide">
                    <img src="img/portfolio1.jpg" alt="" class="portfolio__img">

                    <div class="portfolio__data">
                        <h3 class="portfolio__title">Twitter Clone</h3>
                        <p class="portfolio__description">Tools : ReactJs, NextJs, Sanity CMS, Typescript, Tailwind & NextAuth</p>
                        <a href="https://twitter-cloning.vercel.app/" target="_blank" class="button button--flex button--small portfolio__button">
                            Demo
                            <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <!--==================== PORTFOLIO 2 ====================-->
                <div class="portfolio__content grid swiper-slide">
                    <img src="img/portfolio2.jpg" alt="" class="portfolio__img">

                    <div class="portfolio__data">
                        <h3 class="portfolio__title">Reddit Clone</h3>
                        <p class="portfolio__description">Tools : NextJs, SQL, Supabase, StepZen, GraphQL, TypeScript, Tailwind</p>
                        <a href="https://reddit-cloning.vercel.app/" target="_blank" class="button button--flex button--small portfolio__button">
                            Demo
                            <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                <!--==================== PORTFOLIO 3 ====================-->
                <div class="portfolio__content grid swiper-slide">
                    <img src="img/portfolio3.jpg" alt="" class="portfolio__img">

                    <div class="portfolio__data">
                        <h3 class="portfolio__title">Weeding Web</h3>
                        <p class="portfolio__description">Tools : ReactJs, Firebase</p>
                        <a href="https://shem-rolin.web.app/" target="_blank" class="button button--flex button--small portfolio__button">
                            Demo
                            <i class="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="swiper-button-next">
                <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            <div class="swiper-button-prev">
                <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>

            <div class="swiper-pagination"></div>
        </div>
	`
}

