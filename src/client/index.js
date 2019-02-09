const sentry = require('./errortracking.js');
const houses = require("./coords.js")
var DrawingHelp = false

function Distance(x1, x2, y1, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function DrawHelpText(text, loop, beep, duration) {
    AddTextEntry("HELP_TEXT", text)
    BeginTextCommandDisplayHelp("HELP_TEXT")
    EndTextCommandDisplayHelp(0, loop, beep, duration)
}

sentry.TrackExceptions(() => {
    console.log('client does run');
})