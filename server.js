const express = require('express')
const cors = require('cors')
const AppRouter = require('./routes/App.Router')
const AuthRouter = require('./routes/AuthRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/api', AppRouter)
app.use('/auth', AuthRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
