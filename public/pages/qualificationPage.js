"use strict"

const qualificationPage = () => {
	return `
		<h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My Personal Journey</span>

        <div class="qualification__container container">
            <div class="qualification__tabs">
                <div class="qualification__button button--flex qualification__active" data-target="#education">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div class="qualification__button button--flex" data-target="#work">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
            </div>

            <div class="qualification__sections">
                <!--==================== QUALIFICATION CONTENT 1 ====================-->
                <div class="qualification__content qualification__active" data-content id="education">
                    <!--==================== QUALIFICATION 1 ====================-->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Computer and Network Engineering</h3>
                            <span class="qualification__subtitle">Telkom School</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2010 - 2013
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!--==================== QUALIFICATION 2 ====================-->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <!-- <span class="qualification__line"></span> -->
                        </div>

                        <div>
                            <h3 class="qualification__title">Science Computer</h3>
                            <span class="qualification__subtitle">Telkom University</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                August 2013 - January 2019
                            </div>
                        </div>
                    </div>
                </div>

                <!--==================== QUALIFICATION CONTENT 2 ====================-->
                <div class="qualification__content" data-content id="work">
                    <!--==================== QUALIFICATION 1 ====================-->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Network Engineering (Intern)</h3>
                            <span class="qualification__subtitle">Telkom Indonesia</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                May 2012 - July 2012
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!--==================== QUALIFICATION 2 ====================-->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Custumer Services (Intern)</h3>
                            <span class="qualification__subtitle">BPJS Kesehatan</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                May 2015 - July 2015
                            </div>
                        </div>
                    </div>

                    <!--==================== QUALIFICATION 3 ====================-->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Web Developer</h3>
                            <span class="qualification__subtitle">Jerbee Indonesia</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                June 2017 - August 2017
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!--==================== QUALIFICATION 4 ====================-->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">QA Program</h3>
                            <span class="qualification__subtitle">Freeport Indonesia</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                July 2018 - September 2018
                            </div>
                        </div>

                    </div>

                    <!--==================== QUALIFICATION 5 ====================-->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Backend Developer</h3>
                            <span class="qualification__subtitle">Talentlytica</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                July 2019 - March 2021
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!--==================== QUALIFICATION 6 ====================-->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <!-- <span class="qualification__line"></span> -->
                        </div>

                        <div>
                            <h3 class="qualification__title">Fullstack Developer</h3>
                            <span class="qualification__subtitle">Talentlytica</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                March 2021 - Current
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`
}

