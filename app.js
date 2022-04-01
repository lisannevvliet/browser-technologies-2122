// Import Express.
import express from 'express'
// Import Handlebars.
import { engine } from 'express-handlebars'

// Initialise Express.
const app = express()

// Render static files.
app.use(express.static('public'))

// Set the view engine to Handlebars.
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Parse incoming requests.
app.use(express.urlencoded( { extended: true } ))

// Set the port for Express.
app.listen(3000)

// Listen to all GET requests on /.
app.get('/', (_req, res) => {
	// fs.readFile('informatie.json', 'utf8', function (err, data) {
	// if (err) throw err;
	// let info = JSON.parse(data);

	res.render('home')

	// res.render('home', {
	// 	eerder_opgeslagen_data: info
	// })
})

// let userInput;

// Listen to all POST requests on /.
app.post('/', (req, res) => {
	// userInput = JSON.stringify(req.body.naam)

	// fs.writeFile('informatie.json', userInput, 'utf8', cb => {
		// console.log('werk dan');
	// })

	console.log(req.body)

    res.render('home', { resultaten: req.body })	
})