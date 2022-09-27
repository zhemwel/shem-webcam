"use strict"

const servicesPage = () => {
	return `
		<h2 class="section__title">Services</h2>
        <span class="section__subtitle">What i offer</span>

        <div class="services__container container grid">
            <!--==================== SERVICES 1 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-web-grid services__icon"></i>
                    <h3 class="services__title">UI/UX <br> Designer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">UI/UX <br> Designer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--==================== SERVICES 2 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-arrow services__icon"></i>
                    <h3 class="services__title">Frontend <br> Developer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Frontend <br> Developer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--==================== SERVICES 3 ====================-->
            <div class="services__content">
                <div>
                    <i class="uil uil-pen services__icon"></i>
                    <h3 class="services__title">Branding <br> Designer</h3>
                </div>

                <span class="button button--flex button--small button--link services__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Branding <br> Designer</h4>
                        <i class="uil uil-times services__modal-close"></i>

                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions.</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Develop The User Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	`
}

