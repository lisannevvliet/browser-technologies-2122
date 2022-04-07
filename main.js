// Import Dotenv.
require('dotenv').config()
// Import Express.
const express = require("express")
// Import Handlebars.
const handlebars = require("express-handlebars")
// Import fs (file system).
const fs = require("fs")

// Initialise Express.
const app = express()

// Render static files.
app.use(express.static("static"))

// Set the view engine to Handlebars and import the helpers.
app.engine("handlebars", handlebars.engine({ helpers: require("./helpers") }))
app.set("view engine", "handlebars")

// Parse incoming requests.
app.use(express.urlencoded({ extended: true }))

// Set and log the port for Express.
app.listen(process.env.PORT, () => { console.log(`Express running at http://localhost:${process.env.PORT}.`) })

// Listen to all GET requests on /.
app.get("/", (_req, res) => {
	// Load the index page with the JSON.
	fs.readFile("static/json/informatie.json", "utf8", function(_err, data) {
		res.render("index", { resultaten: JSON.parse(data), sent: false })
	})
})

// Listen to all POST requests on /.
app.post("/", (req, res) => {
	// Overwrite the JSON with the custom values. Synchronious so that it does not crash on the first submit.
	fs.writeFileSync("static/json/informatie.json", JSON.stringify(req.body))

	// Load the index page with the custom JSON and show the message "Enquête is verstuurd!".
	fs.readFile("static/json/informatie.json", "utf8", function(_err, data) {
		res.render("index", { resultaten: JSON.parse(data), sent: true })
	})
})

// Listen to all POST requests on /reset.
app.post("/reset", (_req, res) => {
	// Reset the JSON to the default values. Synchronious so that it does not crash on the first submit.
	const standaard = { "naam-vak-1": "Web App From Scratch", "docenten-vak-1": "Joost Faber en Koop Reynders", "week-vak-1": "week-1-5-vak-1", "naam-vak-2": "CSS to the Rescue", "docenten-vak-2": "Sanne Hooft en Vasilis van Gemert", "week-vak-2": "week-1-5-vak-2", "naam-vak-3": "Projectweek 1", "docenten-vak-3": "Joost Faber en Koop Reynders", "week-vak-3": "week-6-vak-3", "naam-vak-4": "Progressive Web Apps", "docenten-vak-4": "Declan Rek en Justus Sturkenboom", "week-vak-4": "week-7-9-vak-4", "naam-vak-5": "Browser Technologies", "docenten-vak-5": "Peter-Paul Koch en Robert Spier", "week-vak-5": "week-7-9-vak-5", "naam-vak-6": "Projectweek 2", "docenten-vak-6": "Justus Sturkenboom en Robert Spier", "week-vak-6": "week-10-vak-6", "naam-vak-7": "Real-Time Web", "docenten-vak-7": "Justus Sturkenboom en Shyanta Vleugel", "week-vak-7": "week-11-13-vak-7", "naam-vak-8": "Human Centered Design", "docenten-vak-8": "Joost Faber en Koop Reynders", "week-vak-8": "week-11-13-vak-8", "naam-vak-9": "Meesterproef", "docenten-vak-9": "Joost Faber en Koop Reynders", "week-vak-9": "week-15-19-vak-9", "naam-vak-10": "Weekly Nerd", "docenten-vak-10": "Joost Faber en Koop Reynders", "week-vak-10": "week-15-19-vak-10" }
	fs.writeFileSync("static/json/informatie.json", JSON.stringify(standaard))

	// Redirect to the index page with the default JSON.
	res.redirect("/")
})