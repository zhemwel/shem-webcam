"use strict"

const min = (a) => {
    "use strict"
    if (a === undefined) return a
    return a.replace(/[\n\r\t]/g, "").replace(/\s{2,}/g, " ")
}

const init = async () => {
    const $app = $("#app")

    $app.html(min(mainPage()))

    await initMainPage()
    await allFunction()
}

init()