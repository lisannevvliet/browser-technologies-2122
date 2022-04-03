// Import Express.
import express from "express"
// Import Handlebars.
import { engine } from "express-handlebars"
// Import fs (file system).
import fs from "fs"

// Initialise Express.
const app = express()

// Render static files.
app.use(express.static("static"))

// Set the view engine to Handlebars.
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// Parse incoming requests.
app.use(express.urlencoded({ extended: true }))

// Set the port for Express.
app.listen(3000)

// Listen to all GET requests on /.
app.get("/", (_req, res) => {
	// Path to the default JSON.
	var path = "static/json/standaard.json"

	// If a custom JSON exists, use that path instead.
	if (fs.existsSync("static/json/informatie.json")) {
		path = "static/json/informatie.json"
	}

	// Load the index page with the default or custom JSON.
	fs.readFile(path, "utf8", function(_err, data) {
		res.render("index", { resultaten: JSON.parse(data) })
	})
})

// Listen to all POST requests on /.
app.post("/", (req, res) => {
	// Create or modify a custom JSON. Synchronious so that it does not crash on the first submit.
	fs.writeFileSync("static/json/informatie.json", JSON.stringify(req.body), "utf8")

	// Load the index page with the custom JSON.
	fs.readFile("static/json/informatie.json", "utf8", function(_err, data) {
		res.render("index", { resultaten: JSON.parse(data) })
	})
})