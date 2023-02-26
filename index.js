const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//available ports

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

// Server production assests
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join()))
// }

// app.listen(() => {
app.listen(port, () => {
  console.log(`MyNotebook app listening at http://localhost:${port}`)
  // console.log(`MyNotebook app listening`)
})