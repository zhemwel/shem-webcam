"use strict"

const allFunction = async () => {
	/*==================== MENU SHOW Y HIDDEN ====================*/
	const navFunction = () => {
		const $navMenu = $("#nav-menu")
        const $navToggle = $("#nav-toggle")
        const $navClose = $("#nav-close")
		const $navLink = $(".nav__link")

		/*===== MENU SHOW =====*/
		/* Validate if constant exists */
		if ($navToggle) {
			$navToggle.on("click", () => {
                $navMenu.addClass("show-menu")
            })
		}

		/*===== MENU HIDDEN =====*/
		/* Validate if constant exists */
		if ($navClose) {
			$navClose.on("click", () => {
                $navMenu.removeClass("show-menu")
            })
		}

		/*==================== REMOVE MENU MOBILE ====================*/
		const linkAction = () => {
			// When we click on each nav__link, we remove the show-menu class
			$navMenu.removeClass("show-menu")
		}

		$navLink.on("click", () => {
			linkAction()
		})
	}

	/*==================== ACCORDION SKILLS ====================*/
	const skillsFunction = () => {
		const $skillsContent = $(".skills__content")
		const $skillsHeader = $(".skills__header")

		const toggleSkills = (e) => {
			const $target = $(e.currentTarget).parent()

			$skillsContent.removeClass("skills__content skills__open")
			$skillsContent.addClass("skills__content skills__close")

			if ($target.attr("class") === "skills__close skills__content") {
				$target.removeClass("skills__content skills__close")
				$target.addClass("skills__content skills__open")
			}
		}

		$skillsHeader.on("click", e => {
			toggleSkills(e)
		})
	}

	/*==================== QUALIFICATION TABS ====================*/
	const qualificationFunction = () => {
		const $tabs = $("[data-target]")
		const $tabContents = $("[data-content]")

		$tabs.on("click", e => {
			const $target = $(e.currentTarget)
			$tabContents.removeClass("qualification__active")
			$(`${$target.attr("data-target")}`).addClass("qualification__active")

			$tabs.removeClass("qualification__active")
			$target.addClass("qualification__active")
		})
	}

	/*==================== SERVICES MODAL ====================*/
	const servicesFunction = () => {
		const $modalViews = $(".services__modal")
		const $modalBtns = $(".services__button")
		const $modalCloses = $(".services__modal-close")

		$modalBtns.on("click", e => {
			$($(e.currentTarget).parent().children()[2]).addClass("active-modal")
		})

		$modalCloses.on("click", e => {
			$modalViews.removeClass("active-modal")
		})
	}

	const scrollFunction = () => {
        const allScroll = () => {
            /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
            const scrollActive = () => {
                const sections = document.querySelectorAll("section[id]")
                const scrollY = window.pageYOffset

                sections.forEach(current => {
                    const sectionHeight = current.offsetHeight
                    const sectionTop = current.offsetTop - 50
                    let $sectionId = $(current).attr("id")
                    let $element = $(".nav__menu a[href*=" + $sectionId + "]")

                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && $element) {
                        $element.addClass("active-link")
                    } else {
                        if ($element) $element.removeClass("active-link")
                    }
                })
            }

            /*==================== CHANGE BACKGROUND HEADER ====================*/
            const scrollHeader = () => {
                const $nav = $("#header")
                // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
                if (this.scrollY >= 80) $nav.addClass("scroll-header"); else $nav.removeClass("scroll-header")
            }

            /*==================== SHOW SCROLL UP ====================*/
            const scrollUp = () => {
                const $scrollUp = $("#scroll-up");
                // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
                if (this.scrollY >= 560) $scrollUp.addClass("show-scroll"); else $scrollUp.removeClass("show-scroll")
            }

            scrollActive()
            scrollHeader()
            scrollUp()
        }

        window.addEventListener("scroll", allScroll)
    }

    /*==================== DARK LIGHT THEME ====================*/
	const themeFunction = () => {
        const $themeButton = $("#theme-button")
        const darkTheme = "dark-theme"
        const iconTheme = "uil-sun"

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem("selected-theme")
        const selectedIcon = localStorage.getItem("selected-icon")

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
        const getCurrentIcon = () => $themeButton[0].classList.contains(iconTheme) ? "uil-moon" : "uil-sun"

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
            $themeButton[0].classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
        }

        // Activate / deactivate the theme manually with the button
        $themeButton.on("click", () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            $themeButton[0].classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem("selected-theme", getCurrentTheme())
            localStorage.setItem("selected-icon", getCurrentIcon())
        })
    }

	navFunction()
	skillsFunction()
	qualificationFunction()
	// servicesFunction()
	scrollFunction()
	themeFunction()
}