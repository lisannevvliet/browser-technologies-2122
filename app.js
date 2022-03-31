import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded( { extended: true } ))

app.use(express.urlencoded( { extended: true } ))

app.get('/', (_req, res) => {
    res.render('home')
})

// Route. Luistert naar alle GET requests op /
// app.get('/', (req, res) => {


// 	fs.readFile('informatie.json', 'utf8', function (err, data) {
// 	  if (err) throw err;
// 	  let info = JSON.parse(data);


//   		res.render('home', {
//   			eerder_opgeslagen_data: info
//   		})


// 	});
// })

// let userInput;


app.post('/', (req, res) => {
	console.log(req.body)

    res.render('home', { resultaten: req.body })


	// userInput = JSON.stringify(req.body.naam)


	// fs.writeFile('informatie.json', userInput, 'utf8', cb => {
		// console.log('werk dan');
	// })


	// res.render('home', {
	// 	gebruikersnaam: userInput
	// })
})

app.listen(3000)