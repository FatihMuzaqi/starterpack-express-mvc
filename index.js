import express from 'express'
import Users from './models/user-model.js'
import ejs from 'ejs'
import expressEjsLayouts from 'express-ejs-layouts'
import db from './configs/db.js'
import dotenv from 'dotenv'
import router from './routes/user.route.js'

dotenv.config()

const app = express()
const port = 3000


try {
    await db.authenticate()
    console.log('Database connection has been established successfully.')
    // await Users.sync({alter: true}) 
}catch (error) {
    console.error('Unable to connect to the database:', error)
}

app.set('view engine', 'ejs')
app.use(expressEjsLayouts);
app.set('layout', 'layouts/main');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
